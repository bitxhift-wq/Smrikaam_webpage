import React, { useState, useEffect } from 'react';

/**
 * Official SMRIKAAM Technologies Logo Component
 * - 100% Original Official Logo Artwork (745x170px)
 * - 100% Transparent PNG background (zero box/card boundary, zero noise)
 * - Auto-adapts to theme background:
 *   - Dark theme -> Crisp WHITE text
 *   - Light theme -> Crisp BLACK text
 * - Multi-color 3D geometric symbol remains 100% vivid and identical in both themes
 */
export default function Logo({
  className = '',
  height = 44,
  isLightBackground
}) {
  const [isDark, setIsDark] = useState(() =>
    typeof document !== 'undefined'
      ? document.documentElement.classList.contains('dark')
      : false
  );

  useEffect(() => {
    if (typeof document === 'undefined') return;
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    return () => observer.disconnect();
  }, []);

  const useLight = isLightBackground !== undefined ? isLightBackground : !isDark;

  return (
    <div className={`inline-flex items-center shrink-0 select-none ${className}`}>
      {useLight ? (
        <img
          src="/assets/smrikaam-logo-light.png"
          alt="SMRIKAAM Technologies"
          style={{ height: `${height}px` }}
          className="w-auto object-contain object-left transition-transform duration-200 ease-out hover:scale-[1.02] shrink-0"
        />
      ) : (
        <img
          src="/assets/smrikaam-logo-dark.png"
          alt="SMRIKAAM Technologies"
          style={{ height: `${height}px` }}
          className="w-auto object-contain object-left transition-transform duration-200 ease-out hover:scale-[1.02] shrink-0"
        />
      )}
    </div>
  );
}

