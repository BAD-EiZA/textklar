"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  OrbitControls,
  Sky,
} from "@react-three/drei";
import { Avatar } from "./Avatar";
type Props = {};

const ContainerModel = (props: Props) => {
  return (
    <>
      <Canvas shadows camera={{ position: [3, 2, 5],  fov: 30 }}>
        
        <OrbitControls enablePan={false}  enableZoom={false}/>
        
        <Environment preset="sunset" />
        <group position-y={-1.3 }>
          <ContactShadows
            opacity={0.42}
            scale={10}
            blur={1}
            far={10}
            resolution={256}
            color="#000000"
          />
          <Avatar />
        </group>
      </Canvas>
    </>
  );
};

export default ContainerModel;
