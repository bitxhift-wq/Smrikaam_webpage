import React from 'react';
import SideCubeVisual from './SideCubeVisual';

/**
 * DecorativeSideCubes
 * Peripheral flanking decorative 3D cube visual layer.
 *
 * Sits outside the central reading container:
 * - Desktop (>=1280px): Elegantly positioned in the lateral margins
 * - Tablet (768px-1024px): Subtly scaled with lower opacity
 * - Mobile (<768px): Hidden or strictly isolated inside bounding bounds
 * - Never blocks clicks (pointer-events: none)
 * - Safe z-index (z-0 behind relative z-10 content)
 */
export default function DecorativeSideCubes({
  left = true,
  right = true,
  leftSize = 130,
  rightSize = 150,
  leftTop = '20%',
  rightTop = '35%',
  className = ''
}) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none select-none overflow-hidden z-0 ${className}`}
      aria-hidden="true"
    >
      {/* Left Flank Cube */}
      {left && (
        <div
          className="absolute -left-6 sm:-left-12 lg:-left-20 xl:-left-28 hidden md:block opacity-20 lg:opacity-35 transition-opacity duration-300"
          style={{ top: leftTop }}
        >
          <SideCubeVisual size={leftSize} speed={0.9} variant="nested" />
        </div>
      )}

      {/* Right Flank Cube */}
      {right && (
        <div
          className="absolute -right-6 sm:-right-12 lg:-right-20 xl:-right-28 hidden md:block opacity-20 lg:opacity-35 transition-opacity duration-300"
          style={{ top: rightTop }}
        >
          <SideCubeVisual size={rightSize} speed={1.1} variant="cluster" />
        </div>
      )}
    </div>
  );
}
