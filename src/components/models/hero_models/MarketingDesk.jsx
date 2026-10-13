import { useEffect } from "react";
import { useGLTF } from "@react-three/drei";

// The marketing studio room: desk, monitor, posters, neon sign, bookshelf.
// Model footprint is roughly x -2.1..2.1, y 0..2.8, z -0.7..2.5 (metres).
export function MarketingDesk(props) {
  const { scene } = useGLTF("/models/marketing_desk.glb");

  useEffect(() => {
    scene.traverse((obj) => {
      if (obj.isMesh) {
        obj.castShadow = true;
        obj.receiveShadow = true;
      }
    });
  }, [scene]);

  return (
    <group {...props}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload("/models/marketing_desk.glb");
