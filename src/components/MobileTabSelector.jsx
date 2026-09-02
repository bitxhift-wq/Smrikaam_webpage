import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

/**
 * MobileTabSelector
 * 
 * Collapsible mobile dropdown presentation for internal listing pages (Products, Industries, Services).
 * Re-uses the exact same tab state (activeIdx, setActiveIdx) and items array without data duplication.
 * Desktop view (>= 768px) is hidden via `md:hidden`, preserving the original desktop sidebar navigation.
 */
export default function MobileTabSelector({
  items = [],
  activeIdx = 0,
  setActiveIdx,
  tabIdPrefix = 'tab',
  ariaLabel = 'Select item'
}) {
  const [isOpen, setIsOpen] = useState(false);
  const selectorRef = useRef(null);

  const activeItem = items[activeIdx] || items[0] || null;

  // Click outside and Escape key listeners
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e) => {
      if (selectorRef.current && !selectorRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  if (!items || items.length === 0 || !activeItem) return null;

  return (
    <div
      ref={selectorRef}
      className={`page-mobile-selector md:hidden ${isOpen ? 'is-open' : ''}`}
    >
      {/* Dropdown Trigger Button (Closed State) */}
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={`${tabIdPrefix}-mobile-dropdown-menu`}
        aria-label={`${ariaLabel}: ${activeItem.title}`}
        onClick={() => setIsOpen((prev) => !prev)}
        className="page-mobile-selector-trigger"
      >
        <div className="page-mobile-selector-current">
          <div className="page-mobile-selector-title">
            {activeItem.title}
          </div>
        </div>
        <ChevronDown className="page-mobile-selector-icon w-5 h-5" aria-hidden="true" />
      </button>

      {/* Dropdown Options Menu (Open State) */}
      {isOpen && (
        <div
          id={`${tabIdPrefix}-mobile-dropdown-menu`}
          role="tablist"
          aria-label={ariaLabel}
          className="page-mobile-selector-menu"
        >
          {items.map((item, idx) => {
            const isSelected = activeIdx === idx;
            return (
              <button
                key={item.id || idx}
                type="button"
                role="tab"
                id={`${tabIdPrefix}-tab-mobile-${item.id}`}
                aria-selected={isSelected}
                aria-controls={`${tabIdPrefix}-panel-${item.id}`}
                onClick={() => {
                  setActiveIdx(idx);
                  setIsOpen(false);
                }}
                className="page-mobile-selector-option"
              >
                <div className="min-w-0 flex-1">
                  <div className="page-mobile-selector-option-title">
                    {item.title}
                  </div>
                </div>
                {isSelected && (
                  <span className="page-mobile-selector-option-arrow" aria-hidden="true">
                    ✓
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
