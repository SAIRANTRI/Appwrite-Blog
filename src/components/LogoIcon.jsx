import React from 'react';

function LogoIcon({ width = '100px' }) {
  return (
    <div style={{ width }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ width: '100%', height: 'auto' }}>
        <circle cx="256" cy="256" r="256" fill="#FFFF" />
        <text x="50%" y="50%" fontSize="300" fontFamily="monospace" fill="black" textAnchor="middle" alignmentBaseline="central">
          fB
        </text>
      </svg>
    </div>
  );
}

export default LogoIcon;
