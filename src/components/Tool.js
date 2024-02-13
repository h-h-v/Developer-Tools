import React from 'react';

const Tool = ({ name, description, imageUrl, installLink }) => {
  const handleInstall = () => {
    window.location.href = installLink;
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', fontFamily: 'monospace', borderBottom: '1px solid #333', paddingBottom: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={imageUrl} alt={name} style={{ maxWidth: '100px', maxHeight: '100px', marginRight: '20px' }} />
        <div>
          <h2 style={{ color: '#333', marginBottom: '10px' }}>{name}</h2>
          <p style={{ color: '#FAF0E6' }}>{description}</p>
        </div>
      </div>
      <button onClick={handleInstall} style={{ marginLeft: 'auto' }}>Install</button>
    </div>
  );
};

export default Tool;
