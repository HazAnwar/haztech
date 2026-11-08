import { useEffect, useState } from 'react';

const MOBILE_QUERY = '(max-width: 768px)';

/** True on phone-width screens, kept in sync as the window resizes or rotates. */
export default function useIsMobile() {
  const [mobile, setMobile] = useState(() => typeof window !== 'undefined' && !!window.matchMedia?.(MOBILE_QUERY).matches);
  useEffect(() => {
    const mq = window.matchMedia?.(MOBILE_QUERY);
    if (!mq) return;
    const onChange = (e) => setMobile(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return mobile;
}
