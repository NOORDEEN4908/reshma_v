import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { Astronaut } from "./Astronaut";

const ContactExperience = () => {
  return (
    <Canvas dpr={[1, 1.75]} camera={{ position: [0, 0.6, 7], fov: 42 }}>
      <ambientLight intensity={1.0} color="#dfe8ff" />
      <hemisphereLight args={["#ffffff", "#3a3a5a", 0.6]} />
      <directionalLight position={[4, 5, 6]} intensity={2.4} color="#fff2e0" />
      {/* cool rim light from behind-left for a space feel */}
      <pointLight position={[-4, 2, -3]} intensity={25} color="#7aa8ff" />

      <OrbitControls
        target={[0, 0.5, 0]}
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.8}
      />

      <Suspense fallback={null}>
        <Astronaut position={[0, 0, 0]} scale={1.15} />
      </Suspense>
    </Canvas>
  );
};

export default ContactExperience;
