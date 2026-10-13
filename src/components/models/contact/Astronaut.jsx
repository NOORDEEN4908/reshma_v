import { useEffect, useMemo, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { clone } from "three/examples/jsm/utils/SkeletonUtils.js";

// The astronaut GLB is a full space scene (starfield, Earth, planets, station,
// solar array, robot arm, holograms). Only the astronaut and the small floating
// props around him are wanted next to the desk, so the big backdrop is hidden.
const HIDDEN_NODES = [
  "Starfield",
  "Earth",
  "DistantPlanet",
  "RedPlanet",
  "StationModule",
  "SolarArray",
  "RobotArm",
  "Hologram_Animated",
  "Hologram_Floating",
];

export function Astronaut(props) {
  const group = useRef(null);
  const { scene, animations } = useGLTF("/models/astronaut_space_nowall.glb");

  // clone so hiding nodes never mutates the cached original
  const model = useMemo(() => {
    const copy = clone(scene);
    HIDDEN_NODES.forEach((name) => {
      const node = copy.getObjectByName(name);
      if (node) node.visible = false;
    });
    return copy;
  }, [scene]);

  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const floating = actions?.Floating ?? Object.values(actions ?? {})[0];
    floating?.reset().play();
    return () => floating?.stop();
  }, [actions]);

  return (
    <group ref={group} {...props}>
      <primitive object={model} />
    </group>
  );
}

useGLTF.preload("/models/astronaut_space_nowall.glb");
