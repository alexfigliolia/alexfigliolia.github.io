"use client";
import { easing } from "maath";
import { use, useCallback, useMemo, useRef, useState } from "react";
import { Bone, Group, Mesh, MeshStandardMaterial, SRGBColorSpace } from "three";
import { degToRad, MathUtils } from "three/src/math/MathUtils.js";
import { useCursor, useTexture } from "@react-three/drei";
import { ThreeElements, ThreeEvent, useFrame } from "@react-three/fiber";
import { MagazineContext } from "../Context";
import { IMagazinePage } from "../types";
import { Geometry } from "./Geometry";

export const Page = ({
  front,
  back,
  index,
  opened,
  current,
  bookClosed,
  ...rest
}: Props) => {
  const turnedAt = useRef(0);
  const lastOpened = useRef(opened);
  const group = useRef<Group>(null);
  const skinnedMesh = useRef<Mesh>(null);
  const { setCurrent } = use(MagazineContext);
  const [highlighted, setHighlighted] = useState(false);

  useCursor(highlighted);

  const [frontImage, backImage] = useTexture([front, back], ts => {
    ts.forEach(t => {
      t.colorSpace = SRGBColorSpace;
    });
  });

  const manualSkinnedMesh = useMemo(
    () => Geometry.createSkinnedMesh(frontImage, backImage),
    [frontImage, backImage],
  );

  useFrame((_, delta) => {
    if (!skinnedMesh.current || !group.current) {
      return;
    }
    const { material } = skinnedMesh.current;
    if (Array.isArray(material) && material[4]) {
      const intensity = highlighted ? 0.22 : 0;
      (material[4] as MeshStandardMaterial).emissiveIntensity = intensity;
      (material[5] as MeshStandardMaterial).emissiveIntensity = MathUtils.lerp(
        (material[4] as MeshStandardMaterial).emissiveIntensity,
        intensity,
        0.1,
      );
    }
    if (lastOpened.current !== opened) {
      turnedAt.current = Date.now();
      lastOpened.current = opened;
    }
    const turnDuration = Math.sin(
      (Math.min(400, Date.now() - turnedAt.current) / 400) * Math.PI,
    );
    const rotation = Math.PI / 2;
    let targetRotation = opened ? -rotation : rotation;
    if (!bookClosed) {
      targetRotation += degToRad(index * 0.8);
    }
    // @ts-ignore
    const bones = skinnedMesh.current.skeleton.bones as Bone[];
    const { length } = bones;
    for (let i = 0; i < length; i++) {
      const target = i === 0 ? group.current : bones[i];
      const insideCurveIntensity = i < 8 ? Math.sin(i * 0.2 + 0.25) : 0;
      const outsideCurveIntensity = i >= 8 ? Math.cos(i * 0.3 + 0.09) : 0;
      const turningIntesity =
        Math.sin(i * Math.PI * (1 / length)) * turnDuration;
      let foldAngle = degToRad(Math.sign(targetRotation) * 2);
      let turnAngle = 0;
      if (bookClosed) {
        if (i === 0) {
          foldAngle = 0;
          turnAngle = targetRotation;
        }
      } else {
        turnAngle =
          Geometry.INSIDE_CURVE_STRENGTH *
            insideCurveIntensity *
            targetRotation -
          Geometry.OUTSITE_CURVE_STRENGTH *
            outsideCurveIntensity *
            targetRotation +
          Geometry.TURNING_CURVE_STRENGTH * turningIntesity * targetRotation;
      }
      const foldIntensity =
        i > 8 ? Math.sin(i * Math.PI * (1 / length) - 0.5) * turnDuration : 0;
      easing.dampAngle(
        target.rotation,
        "y",
        turnAngle,
        Geometry.TURN_EASE_FACTOR,
        delta,
      );
      easing.dampAngle(
        target.rotation,
        "x",
        foldAngle * foldIntensity,
        Geometry.FOLD_EASE_FACTOR,
        delta,
      );
    }
  });

  const zPosition = useMemo(
    () => -index * Geometry.PAGE_DEPTH + current * Geometry.PAGE_DEPTH,
    [index, current],
  );

  const onPointerEnter = useCallback((e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    setHighlighted(true);
  }, []);

  const onPointerLeave = useCallback((e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    setHighlighted(false);
  }, []);

  const onClick = useCallback(
    (e: ThreeEvent<PointerEvent>) => {
      e.stopPropagation();
      setCurrent(opened ? index : index + 1);
      setHighlighted(false);
    },
    [opened, setCurrent, index],
  );

  return (
    <group
      ref={group}
      {...rest}
      onClick={onClick}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}>
      <primitive
        ref={skinnedMesh}
        object={manualSkinnedMesh}
        position-z={zPosition}
      />
    </group>
  );
};

type Props = IMagazinePage &
  ThreeElements["group"] & {
    index: number;
    opened: boolean;
    current: number;
    bookClosed: boolean;
  };
