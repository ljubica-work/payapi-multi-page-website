import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const Portal = ({ children }) => {
  const element = useRef(null);

  if (!element.current) {
    element.current = document.createElement('div');
  }

  useEffect(() => {
    const portalRoot = document.getElementById('portal-root');
    const { current } = element;

    portalRoot.appendChild(current);
    return () => portalRoot.removeChild(current);
  }, []);

  return createPortal(children, element.current);
};

export default Portal;
