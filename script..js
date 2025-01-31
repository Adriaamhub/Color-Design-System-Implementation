import React from 'react';
import './Color.css';  // Import the CSS where the colors are defined

const colors = [
  { name: 'Primary', variable: '--primary' },
  { name: 'Secondary', variable: '--secondary' },
  { name: 'Base', variable: '--base' },
  { name: 'Warning', variable: '--warning' },
  { name: 'Success', variable: '--success' },
  { name: 'Yellow', variable: '--yellow' }
];

const Color = () => {
  return (
    <div className="color-page">
      <h1>Color Design System</h1>
      <div className="color-categories">
        {colors.map((color) => (
          <div key={color.name} className="color-category">
            <h2>{color.name} Colors</h2>
            <div className="color-shades">
              {Array.from({ length: 9 }, (_, index) => (
                <div
                  key={index}
                  className="color-shade"
                  style={{
                    backgroundColor: `var(${color.variable}-${(index + 1) * 100})`,
                  }}
                >
                  <p>Shade {index + 1}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Color;

