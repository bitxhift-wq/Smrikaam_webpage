import React from 'react';

export default function BlueprintWrapper({ children, className = '', dark = false, pulseCorners = false, style }) {
  const cornerClass = `corner ${pulseCorners ? 'corner-pulse' : ''}`;
  return (
    <div className={`blueprint ${dark ? 'blueprint-dark' : ''} ${className}`} style={style}>
      <i className={`${cornerClass} tl`}>+</i>
      <i className={`${cornerClass} tr`}>+</i>
      <i className={`${cornerClass} bl`}>+</i>
      <i className={`${cornerClass} br`}>+</i>
      {children}
    </div>
  );
}
