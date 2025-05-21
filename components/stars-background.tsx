// components/StarsBackground.tsx
'use client';
import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

export function StarsBackground() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: 'transparent',
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            resize: true,
          },
        },
        particles: {
          color: { value: '#ffffff' },
          number: {
            value: 100,
            density: {
              enable: true,
              area: 800,
            },
          },
          shape: {
            type: 'circle',
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: 1,
          },
          move: {
            enable: true,
            speed: 0.2,
          },
        },
        detectRetina: true,
      }}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
}
