import { loadStarsPreset } from "@tsparticles/preset-stars";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useState, useEffect } from "react";

const Particle = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadStarsPreset(engine); // load preset
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) {
    return <></>;
  }
  return (
    
      <Particles className="w-[80%]" options={{ preset: "stars" }} />
    
  );
};

export default Particle;
