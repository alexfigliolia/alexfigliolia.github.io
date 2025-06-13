import { useMemo, useRef } from "react";
import { Mesh, Vector3 } from "three";
import { useFrame } from "@react-three/fiber";

export const Box = ({ color }: Props) => {
  const time = useRef(0);
  const box = useRef<Mesh>(null);
  const position = useRef(positionBox());
  const xSpeed = useMemo(() => Math.random(), []);
  const ySpeed = useMemo(() => Math.random(), []);
  const scale = useMemo(() => Math.pow(Math.random(), 2) * 0.5 + 0.05, []);

  useFrame((_, delta) => {
    time.current += delta * 1.2;
    if (!box.current) {
      return;
    }
    const { x, y, z } = position.current;
    const nextZ = z - time.current;
    if (nextZ < -10) {
      position.current = positionBox(Math.random() * 10 + 10);
      time.current = 0;
    }
    box.current.position.set(x, y, nextZ);
    box.current.rotation.x += xSpeed * delta;
    box.current.rotation.y += ySpeed * delta;
  });

  return (
    <mesh castShadow ref={box} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} envMapIntensity={0.15} />
    </mesh>
  );
};

export type BoxColor = [r: number, g: number, b: number];

interface Props {
  color: BoxColor;
}

function positionBox(z: number = (Math.random() * 2 - 1) * 15) {
  const position = new Vector3(
    (Math.random() * 2 - 1) * 3,
    Math.max(0.5, Math.random() * 2.5 + 0.1),
    z,
  );
  if (position.x < 0) {
    position.x -= 2.5;
  } else if (position.x > 0) {
    position.x += 2.5;
  }
  return position;
}
