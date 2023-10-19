import React from 'react';

function CyclistList({ cyclists }) {
  return (
    <div>
      <h2>List of Registered Boda-Boda Cyclists</h2>
      <ul>
        {cyclists.map((cyclist, index) => (
          <li key={index}>{cyclist.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CyclistList;
