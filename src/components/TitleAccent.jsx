import React from 'react';

/**
 * Renders uppercase text with specific letters highlighted in Devotix red (#FF1E27)
 * matching the original design mockup with compact, proportional typography.
 */
export default function TitleAccent({ type, className = "" }) {
  switch (type) {
    case 'work':
      // "SOFTWARE ENGINEERING PROJECTS"
      return (
        <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black tracking-tight uppercase leading-tight font-display ${className}`}>
          SOFTWARE <span className="text-brand-red">E</span>NGINEERING
          <br />
          <span className="text-brand-red">P</span>ROJECTS.
        </h2>
      );

    case 'clients':
      // "OUR CLIENT"
      return (
        <h2 className={`text-xl sm:text-2xl md:text-3xl font-black tracking-tight uppercase ${className}`}>
          OU<span className="text-brand-red">R</span> CLI<span className="text-brand-red">E</span>NT
        </h2>
      );

    case 'services':
      // "OUR SERVICE"
      return (
        <h2 className={`text-xl sm:text-2xl md:text-3xl font-black tracking-tight uppercase text-center ${className}`}>
          OU<span className="text-brand-red">R</span> S<span className="text-brand-red">E</span>RVIC<span className="text-brand-red">E</span>
        </h2>
      );

    case 'production':
      // "VIDEOS"
      return (
        <h2 className={`text-xl sm:text-2xl md:text-3xl font-black tracking-tight uppercase text-center font-display ${className}`}>
          VID<span className="text-brand-red">E</span>OS
        </h2>
      );

    case 'graphic':
      // "GRAPHIC"
      return (
        <h2 className={`text-xl sm:text-2xl md:text-3xl font-black tracking-tight uppercase text-center font-display ${className}`}>
          G<span className="text-brand-red">R</span>APHIC
        </h2>
      );

    case 'photography':
      // "OUR PHOTOGRAPHY"
      return (
        <h2 className={`text-xl sm:text-2xl md:text-3xl font-black tracking-tight uppercase text-center ${className}`}>
          OU<span className="text-brand-red">R</span> PH<span className="text-brand-red">O</span>T<span className="text-brand-red">O</span>G<span className="text-brand-red">R</span>APHY
        </h2>
      );

    default:
      return null;
  }
}
