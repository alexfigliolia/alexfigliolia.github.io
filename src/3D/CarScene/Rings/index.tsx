import { Fragment, useCallback, useMemo, useRef } from "react";
import { Color, Mesh } from "three";
import { useFrame } from "@react-three/fiber";
import { Scenes } from "Tools/Scenes";

const RED = new Color(6, 0.16, 0.7).multiplyScalar(0.5);
const BLUE = new Color(0.1, 0.7, 3).multiplyScalar(0.5);

export const Rings = ({ total = 14 }: Props) => {
  const nodes = useRef<Mesh[]>([]);
  const color = useMemo(() => [0, 0, 0] as const, []);
  const position = useMemo(() => [0, 0, 0] as const, []);
  const ringEmission = useMemo(() => [0.5, 0.5, 0.5] as const, []);
  const ringArgs = useMemo(() => [3.35, 0.05, 16, 100] as const, []);
  const rings = useMemo(() => new Array<null>(total).fill(null), [total]);

  const cacheReference = useCallback((index: number) => {
    return (reference: Mesh) => {
      nodes.current[index] = reference;
    };
  }, []);

  useFrame(({ clock }) => {
    let pointer = -1;
    const time = clock.getElapsedTime();
    for (const mesh of nodes.current) {
      pointer++;
      if (!mesh) {
        continue;
      }
      const Z = (pointer - total / 2) * 3.5 + ((time * 0.4) % 3.5) * 2;
      mesh.position.set(0, 0, -Z);
      const distance = Math.abs(Z);
      const scale = 1 - distance * 0.04;
      mesh.scale.set(scale, scale, scale);
      const color = (pointer % 2 === 0 ? BLUE : RED).clone();
      let colorScale = 1;
      if (distance > 2) {
        colorScale = 1 - (Math.min(12, distance) - 2) / 10;
      }
      colorScale *= 0.5;
      color.multiplyScalar(colorScale);
      Scenes.forEachMaterial(mesh.material, material => {
        material.emissive = color;
      });
    }
  });

  return (
    <Fragment>
      {rings.map((_, i) => {
        const ref = cacheReference(i);
        return (
          <mesh ref={ref} key={i} castShadow receiveShadow position={position}>
            <torusGeometry args={ringArgs} />
            <meshStandardMaterial emissive={ringEmission} color={color} />
          </mesh>
        );
      })}
    </Fragment>
  );
};

interface Props {
  total?: number;
}
