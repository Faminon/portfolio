import React from 'react';

export default function BackgroundOrbs() {
  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}
    >
      <div 
        style={{
          position: 'absolute',
          top: '-15%',
          left: '10%',
          width: '50vw',
          height: '50vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, transparent 70%)',
          filter: 'blur(80px)'
        }}
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '-15%',
          right: '10%',
          width: '45vw',
          height: '45vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(129, 140, 248, 0.07) 0%, transparent 70%)',
          filter: 'blur(80px)'
        }}
      />
    </div>
  );
}
