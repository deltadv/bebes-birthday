import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = () => {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  const options = useMemo(
    () => ({
      fpsLimit: 120,
      interactivity: {},
      particles: {
        color: {
          value: ["#FF1493", "#8A2BE2", "#FFFFFF"],
        },
        links: {
          enable: false,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "out",
          },
          random: true,
          speed: 0.6, // Slower speed for a more space-like effect
          straight: false,
          attract: {
            enable: false, // Disable attraction for more random movement
          },
          path: {
            delay: { value: 0.5 }, // Delay to simulate a more gradual movement
          },
        },
        number: {
          density: {
            enable: true,
            value_area: 800,
          },
          value: 150,
        },
        opacity: {
          value: 0.8,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 4 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <Particles
      id="particles-background"
      options={options}
      className="fixed top-0 left-0 w-full h-screen -z-10 bg-[#1a1a1a]"
    />
  );
};

export default ParticlesComponent;
