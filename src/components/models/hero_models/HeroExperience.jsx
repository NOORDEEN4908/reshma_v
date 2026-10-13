import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";

import { MarketingDesk } from "./MarketingDesk";
import HeroLights from "./HeroLights";
import Particles from "./Particles";
import { Suspense } from "react";

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <Canvas shadows dpr={[1, 1.75]} camera={{ position: [0, 0, 15], fov: 45 }}>
      {/* deep blue ambient */}
      <ambientLight intensity={0.6} color="#2a2a60" />
      {/* even fill so the whole studio room reads clearly */}
      <hemisphereLight args={["#ffffff", "#6a5a7a", 0.7]} />
      <directionalLight
        position={[4, 8, 8]}
        intensity={1.8}
        color="#ffe9d0"
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-left={-6}
        shadow-camera-right={6}
        shadow-camera-top={8}
        shadow-camera-bottom={-4}
      />
      {/* Configure OrbitControls to disable panning and control zoom based on device type */}
      <OrbitControls
        enablePan={false} // Prevents panning of the scene
        enableZoom={!isTablet} // Disables zoom on tablets
        maxDistance={20} // Maximum distance for zooming out
        minDistance={5} // Minimum distance for zooming in
        minPolarAngle={Math.PI / 5} // Minimum angle for vertical rotation
        maxPolarAngle={Math.PI / 2} // Maximum angle for vertical rotation
      />

      <Suspense fallback={null}>
        <HeroLights />
        <Particles count={100} />
        {/* studio room is ~4.2m wide x 2.8m tall, so it is scaled down vs the old desk */}
        <group
          scale={isMobile ? 1.15 : 1.9}
          position={[0, isMobile ? -1.6 : -2.6, 0]}
          rotation={[0, -Math.PI / 8, 0]}
        >
          {/* offset re-centres the room's footprint on the origin */}
          <MarketingDesk position={[0, 0, -0.9]} />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default HeroExperience;
