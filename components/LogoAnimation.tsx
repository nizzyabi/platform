import React from 'react';

const LogoAnimation = () => {
  return (
    <video autoPlay loop muted playsInline height={80} width={80}>
      <source src="/chad.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default LogoAnimation;
