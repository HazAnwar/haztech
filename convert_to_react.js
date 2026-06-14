const fs = require('fs');
const path = require('path');

const srcDirs = [
    { name: 'HazAnwarDocs', path: '../HazAnwarDocs', route: '/' },
    { name: 'LeapLauncherDocs', path: '../LeapLauncherDocs', route: '/leap-launcher' },
    { name: 'MarkazDocs', path: '../MarkazDocs', route: '/markaz' }
];

const destApp = './src';
const destPublic = './public';

function htmlToJsx(html) {
    let jsx = html
        // remove doctype and html/head/body tags (keep only content of body)
        .replace(/<!DOCTYPE html>/gi, '')
        .replace(/<html.*?>/gi, '')
        .replace(/<\/html>/gi, '')
        .replace(/<head>[\s\S]*?<\/head>/gi, '')
        .replace(/<body.*?>/gi, '')
        .replace(/<\/body>/gi, '')
        // convert class to className
        .replace(/class=/g, 'className=')
        // convert for to htmlFor
        .replace(/for=/g, 'htmlFor=')
        // self close tags
        .replace(/<img(.*?)>/g, (m, p1) => {
            if(p1.endsWith('/')) return m;
            return `<img${p1} />`;
        })
        .replace(/<input(.*?)>/g, (m, p1) => {
            if(p1.endsWith('/')) return m;
            return `<input${p1} />`;
        })
        .replace(/<br(.*?)>/g, (m, p1) => {
            if(p1.endsWith('/')) return m;
            return `<br${p1} />`;
        })
        .replace(/<hr(.*?)>/g, (m, p1) => {
            if(p1.endsWith('/')) return m;
            return `<hr${p1} />`;
        })
        // fix inline styles to object (simple ones only, maybe none exist or we can just strip them if not critical)
        .replace(/style="([^"]*)"/g, (m, p1) => {
            const rules = p1.split(';').filter(Boolean);
            let obj = {};
            rules.forEach(r => {
                let [k, v] = r.split(':');
                if(k && v) {
                    let key = k.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
                    obj[key] = v.trim();
                }
            });
            return `style={${JSON.stringify(obj)}}`;
        })
        // fix script tags (remove them, as we use React useEffect or just ignore)
        .replace(/<script>[\s\S]*?<\/script>/gi, '');

    // remove comments
    jsx = jsx.replace(/<!--[\s\S]*?-->/g, '');
    
    // fix aria attributes (mostly fine as is in React, but ensure no unclosed tags)
    // specifically <path> and <circle> and <line> and <polyline>
    jsx = jsx.replace(/<path(.*?)>/g, (m, p1) => p1.endsWith('/') ? m : `<path${p1} />`)
             .replace(/<circle(.*?)>/g, (m, p1) => p1.endsWith('/') ? m : `<circle${p1} />`)
             .replace(/<line(.*?)>/g, (m, p1) => p1.endsWith('/') ? m : `<line${p1} />`)
             .replace(/<polyline(.*?)>/g, (m, p1) => p1.endsWith('/') ? m : `<polyline${p1} />`);

    return `<>${jsx}</>`;
}

if (!fs.existsSync(destApp + '/pages')) {
    fs.mkdirSync(destApp + '/pages', { recursive: true });
}

let appImports = [];
let appRoutes = [];

srcDirs.forEach(dir => {
    const pageDir = path.join(destApp, 'pages', dir.name);
    fs.mkdirSync(pageDir, { recursive: true });
    
    // Copy assets
    const srcAssets = path.join(dir.path, 'assets');
    const destAssets = path.join(destPublic, 'assets', dir.name);
    if (fs.existsSync(srcAssets)) {
        fs.mkdirSync(destAssets, { recursive: true });
        fs.cpSync(srcAssets, destAssets, { recursive: true });
    }

    // Process CSS - scope it so they don't clash
    const cssPath = path.join(dir.path, 'style.css');
    if (fs.existsSync(cssPath)) {
        let cssContent = fs.readFileSync(cssPath, 'utf8');
        // Simple scoping: prepend .scope-Name to major selectors or just let it be if it doesn't break
        // Actually, easiest is just to copy it and import it in the component. We can rely on CSS modules if we rename to .module.css
        // But CSS modules hash class names, which requires changing JSX.
        // We will just wrap the component in a div with a specific id and scope the CSS manually in a separate step or just include it.
        // Let's just prefix the CSS body selector
        cssContent = cssContent.replace(/body\s*{/g, `.${dir.name}-wrapper {`);
        fs.writeFileSync(path.join(pageDir, 'style.css'), cssContent);
    }

    // Process HTML files
    const files = fs.readdirSync(dir.path).filter(f => f.endsWith('.html'));
    files.forEach(file => {
        const html = fs.readFileSync(path.join(dir.path, file), 'utf8');
        let jsx = htmlToJsx(html);
        
        // fix asset paths
        jsx = jsx.replace(/assets\//g, `/assets/${dir.name}/`);
        
        // fix .html links
        jsx = jsx.replace(/href="([^"]*)\.html"/g, (m, p1) => {
            if(p1 === 'index') return `href="#${dir.route}"`;
            return `href="#${dir.route}/${p1}"`;
        });
        
        // fix exact site links
        jsx = jsx.replace(/href="https:\/\/hazanwar\.github\.io\/"/g, `href="#/"`);
        jsx = jsx.replace(/href="https:\/\/hazanwar\.github\.io\/leap-launcher\/"/g, `href="#/leap-launcher"`);
        jsx = jsx.replace(/href="https:\/\/hazanwar\.github\.io\/markaz\/"/g, `href="#/markaz"`);

        const compName = file.replace('.html', '').split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('') + 'Page';
        
        const componentCode = `
import React, { useEffect } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export default function ${compName}() {
    useEffect(() => {
        // Any JS initialization can go here if needed
        document.body.className = '${dir.name}-body';
    }, []);

    return (
        <div className="${dir.name}-wrapper">
            ${jsx.replace(/<a href="#([^"]*)">/g, '<Link to="$1">').replace(/<\/a>/g, '</Link>')}
        </div>
    );
}
        `;
        
        fs.writeFileSync(path.join(pageDir, `${compName}.jsx`), componentCode);
        
        let subRoute = file === 'index.html' ? dir.route : `${dir.route}/${file.replace('.html', '')}`;
        if(subRoute.includes('//')) subRoute = subRoute.replace('//', '/');
        
        appImports.push(`import ${dir.name}${compName} from './pages/${dir.name}/${compName}';`);
        appRoutes.push(`<Route path="${subRoute}" element={<${dir.name}${compName} />} />`);
    });
});

const appJsx = `
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
${appImports.join('\n')}

function App() {
  return (
    <Router>
      <Routes>
        ${appRoutes.join('\n        ')}
      </Routes>
    </Router>
  );
}

export default App;
`;

fs.writeFileSync(path.join(destApp, 'App.jsx'), appJsx);
console.log('Done converting to React');
