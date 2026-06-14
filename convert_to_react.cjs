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
        .replace(/<!DOCTYPE html>/gi, '')
        .replace(/<html.*?>/gi, '')
        .replace(/<\/html>/gi, '')
        .replace(/<head>[\s\S]*?<\/head>/gi, '')
        .replace(/<body.*?>/gi, '')
        .replace(/<\/body>/gi, '')
        .replace(/class=/g, 'className=')
        .replace(/for=/g, 'htmlFor=')
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
            return `style={{${Object.entries(obj).map(([k,v]) => `${k}: "${v}"`).join(', ')}}}`;
        })
        .replace(/<script>[\s\S]*?<\/script>/gi, '');

    jsx = jsx.replace(/<!--[\s\S]*?-->/g, '');
    
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
    
    const srcAssets = path.join(dir.path, 'assets');
    const destAssets = path.join(destPublic, 'assets', dir.name);
    if (fs.existsSync(srcAssets)) {
        fs.mkdirSync(destAssets, { recursive: true });
        fs.cpSync(srcAssets, destAssets, { recursive: true });
    }

    const cssPath = path.join(dir.path, 'style.css');
    if (fs.existsSync(cssPath)) {
        let cssContent = fs.readFileSync(cssPath, 'utf8');
        cssContent = cssContent.replace(/body\s*{/g, `.${dir.name}-wrapper {`);
        fs.writeFileSync(path.join(pageDir, 'style.css'), cssContent);
    }

    const files = fs.readdirSync(dir.path).filter(f => f.endsWith('.html') && !f.includes('googlef'));
    files.forEach(file => {
        const html = fs.readFileSync(path.join(dir.path, file), 'utf8');
        let jsx = htmlToJsx(html);
        
        jsx = jsx.replace(/assets\//g, `assets/${dir.name}/`);
        
        jsx = jsx.replace(/href="([^"]*)\.html"/g, (m, p1) => {
            if(p1 === 'index') return `href="#${dir.route}"`;
            return `href="#${dir.route}/${p1}"`;
        });
        
        jsx = jsx.replace(/href="https:\/\/hazanwar\.github\.io\/"/g, `href="#/"`);
        jsx = jsx.replace(/href="https:\/\/hazanwar\.github\.io\/leap-launcher\/"/g, `href="#/leap-launcher"`);
        jsx = jsx.replace(/href="https:\/\/hazanwar\.github\.io\/markaz\/"/g, `href="#/markaz"`);
        jsx = jsx.replace(/href="https:\/\/hazanwar\.github\.io\/leap-launcher"/g, `href="#/leap-launcher"`);
        jsx = jsx.replace(/href="https:\/\/hazanwar\.github\.io\/markaz"/g, `href="#/markaz"`);

        const compName = file.replace('.html', '').split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('') + 'Page';
        
        const componentCode = `
import React, { useEffect } from 'react';
import './style.css';

export default function ${compName}() {
    useEffect(() => {
        document.body.className = '${dir.name}-body';
    }, []);

    return (
        <div className="${dir.name}-wrapper">
            ${jsx}
        </div>
    );
}
        `;
        
        fs.writeFileSync(path.join(pageDir, `${compName}.jsx`), componentCode);
        
        let subRoute = file === 'index.html' ? dir.route : `${dir.route}/${file.replace('.html', '')}`;
        if(subRoute.includes('//')) subRoute = subRoute.replace('//', '/');
        if(subRoute !== '/' && subRoute.endsWith('/')) subRoute = subRoute.slice(0, -1);
        
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
