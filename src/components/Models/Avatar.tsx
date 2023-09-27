
import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    ["Body_(merged)baked001"]: THREE.SkinnedMesh;
    ["Body_(merged)baked001_1"]: THREE.SkinnedMesh;
    ["Body_(merged)baked001_2"]: THREE.SkinnedMesh;
    ["Body_(merged)baked001_3"]: THREE.SkinnedMesh;
    ["Body_(merged)baked001_4"]: THREE.SkinnedMesh;
    ["Body_(merged)baked001_5"]: THREE.SkinnedMesh;
    ["Body_(merged)baked001_6"]: THREE.SkinnedMesh;
    ["Face_(merged)baked001"]: THREE.SkinnedMesh;
    ["Face_(merged)baked001_1"]: THREE.SkinnedMesh;
    ["Face_(merged)baked001_2"]: THREE.SkinnedMesh;
    ["Face_(merged)baked001_3"]: THREE.SkinnedMesh;
    ["Face_(merged)baked001_4"]: THREE.SkinnedMesh;
    ["Face_(merged)baked001_5"]: THREE.SkinnedMesh;
    ["Face_(merged)baked001_6"]: THREE.SkinnedMesh;
    ["Face_(merged)baked001_7"]: THREE.SkinnedMesh;
    Hair: THREE.SkinnedMesh;
    mixamorigHips: THREE.Bone;
  };
  materials: {
    ["N00_000_00_Body_00_SKIN (Instance).001"]: THREE.MeshStandardMaterial;
    ["N00_000_00_HairBack_00_HAIR (Instance).001"]: THREE.MeshStandardMaterial;
    ["N00_001_03_Bottoms_01_CLOTH (Instance).001"]: THREE.MeshStandardMaterial;
    ["N00_007_02_Tops_01_CLOTH (Instance).001"]: THREE.MeshStandardMaterial;
    ["N00_007_01_Tops_01_CLOTH (Instance).001"]: THREE.MeshStandardMaterial;
    ["N00_001_01_Shoes_01_CLOTH (Instance).001"]: THREE.MeshStandardMaterial;
    ["N00_001_02_Accessory_Tie_01_CLOTH (Instance).001"]: THREE.MeshStandardMaterial;
    ["N00_000_00_FaceMouth_00_FACE (Instance).001"]: THREE.MeshStandardMaterial;
    ["N00_000_00_EyeIris_00_EYE (Instance).001"]: THREE.MeshStandardMaterial;
    ["N00_000_00_EyeHighlight_00_EYE (Instance).001"]: THREE.MeshStandardMaterial;
    ["N00_000_00_Face_00_SKIN (Instance).001"]: THREE.MeshStandardMaterial;
    ["N00_000_00_EyeWhite_00_EYE (Instance).001"]: THREE.MeshStandardMaterial;
    ["N00_000_00_FaceBrow_00_FACE (Instance).001"]: THREE.MeshStandardMaterial;
    ["N00_000_00_FaceEyelash_00_FACE (Instance).001"]: THREE.MeshStandardMaterial;
    ["N00_000_00_FaceEyeline_00_FACE (Instance).001"]: THREE.MeshStandardMaterial;
    ["N00_000_Hair_00_HAIR (Instance).001"]: THREE.MeshStandardMaterial;
  };
};

type ActionName =
  | "Armature.001|mixamo.com|Layer0"
  | "Armature.001|mixamo.com|Layer0.001"
  | "Armature.001|mixamo.com|Layer0.002"
  | "Armature.001|mixamo.com|Layer0.003"
  | "Armature.001|mixamo.com|Layer0.004"
  | "Armature.001|mixamo.com|Layer0.005"
  | "Armature|mixamo.com|Layer0";
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

export function Avatar(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials, animations:anim } = useGLTF(
    "models/MavisFinal.gltf"
  ) as GLTFResult;
 
  const [isPointer, setIsPointer] = useState(true)
  const { actions } = useAnimations(anim, group);
  const HandlePointerOut = () => {
    setIsPointer(false)
    
    actions[anim[2].name]?.stop()
    actions[anim[5].name]?.play()
    
  }
  const HandlePointerIn = () => {
    setIsPointer(false)
    actions[anim[5].name]?.stop()
    actions[anim[2].name]?.play()
    
    
  }
  useEffect(()=> {
    if(isPointer){
        actions[anim[5].name]?.play()
    }
  },[isPointer])
  return (
    <group ref={group} {...props} dispose={null} scale={1.75}  onClick={()=>HandlePointerIn()} onPointerOut={()=> HandlePointerOut()}>
      <group name="Scene">
        <group name="secondary" rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group name="Body">
            <skinnedMesh
              name="Body_(merged)baked001"
              geometry={nodes["Body_(merged)baked001"].geometry}
              material={materials["N00_000_00_Body_00_SKIN (Instance).001"]}
              skeleton={nodes["Body_(merged)baked001"].skeleton}
            />
            <skinnedMesh
              name="Body_(merged)baked001_1"
              geometry={nodes["Body_(merged)baked001_1"].geometry}
              material={materials["N00_000_00_HairBack_00_HAIR (Instance).001"]}
              skeleton={nodes["Body_(merged)baked001_1"].skeleton}
            />
            <skinnedMesh
              name="Body_(merged)baked001_2"
              geometry={nodes["Body_(merged)baked001_2"].geometry}
              material={materials["N00_001_03_Bottoms_01_CLOTH (Instance).001"]}
              skeleton={nodes["Body_(merged)baked001_2"].skeleton}
            />
            <skinnedMesh
              name="Body_(merged)baked001_3"
              geometry={nodes["Body_(merged)baked001_3"].geometry}
              material={materials["N00_007_02_Tops_01_CLOTH (Instance).001"]}
              skeleton={nodes["Body_(merged)baked001_3"].skeleton}
            />
            <skinnedMesh
              name="Body_(merged)baked001_4"
              geometry={nodes["Body_(merged)baked001_4"].geometry}
              material={materials["N00_007_01_Tops_01_CLOTH (Instance).001"]}
              skeleton={nodes["Body_(merged)baked001_4"].skeleton}
            />
            <skinnedMesh
              name="Body_(merged)baked001_5"
              geometry={nodes["Body_(merged)baked001_5"].geometry}
              material={materials["N00_001_01_Shoes_01_CLOTH (Instance).001"]}
              skeleton={nodes["Body_(merged)baked001_5"].skeleton}
            />
            <skinnedMesh
              name="Body_(merged)baked001_6"
              geometry={nodes["Body_(merged)baked001_6"].geometry}
              material={
                materials["N00_001_02_Accessory_Tie_01_CLOTH (Instance).001"]
              }
              skeleton={nodes["Body_(merged)baked001_6"].skeleton}
            />
          </group>
          <group name="Face">
            <skinnedMesh
              name="Face_(merged)baked001"
              geometry={nodes["Face_(merged)baked001"].geometry}
              material={
                materials["N00_000_00_FaceMouth_00_FACE (Instance).001"]
              }
              skeleton={nodes["Face_(merged)baked001"].skeleton}
              morphTargetDictionary={
                nodes["Face_(merged)baked001"].morphTargetDictionary
              }
              morphTargetInfluences={
                nodes["Face_(merged)baked001"].morphTargetInfluences
              }
            />
            <skinnedMesh
              name="Face_(merged)baked001_1"
              geometry={nodes["Face_(merged)baked001_1"].geometry}
              material={materials["N00_000_00_EyeIris_00_EYE (Instance).001"]}
              skeleton={nodes["Face_(merged)baked001_1"].skeleton}
              morphTargetDictionary={
                nodes["Face_(merged)baked001_1"].morphTargetDictionary
              }
              morphTargetInfluences={
                nodes["Face_(merged)baked001_1"].morphTargetInfluences
              }
            />
            <skinnedMesh
              name="Face_(merged)baked001_2"
              geometry={nodes["Face_(merged)baked001_2"].geometry}
              material={
                materials["N00_000_00_EyeHighlight_00_EYE (Instance).001"]
              }
              skeleton={nodes["Face_(merged)baked001_2"].skeleton}
              morphTargetDictionary={
                nodes["Face_(merged)baked001_2"].morphTargetDictionary
              }
              morphTargetInfluences={
                nodes["Face_(merged)baked001_2"].morphTargetInfluences
              }
            />
            <skinnedMesh
              name="Face_(merged)baked001_3"
              geometry={nodes["Face_(merged)baked001_3"].geometry}
              material={materials["N00_000_00_Face_00_SKIN (Instance).001"]}
              skeleton={nodes["Face_(merged)baked001_3"].skeleton}
              morphTargetDictionary={
                nodes["Face_(merged)baked001_3"].morphTargetDictionary
              }
              morphTargetInfluences={
                nodes["Face_(merged)baked001_3"].morphTargetInfluences
              }
            />
            <skinnedMesh
              name="Face_(merged)baked001_4"
              geometry={nodes["Face_(merged)baked001_4"].geometry}
              material={materials["N00_000_00_EyeWhite_00_EYE (Instance).001"]}
              skeleton={nodes["Face_(merged)baked001_4"].skeleton}
              morphTargetDictionary={
                nodes["Face_(merged)baked001_4"].morphTargetDictionary
              }
              morphTargetInfluences={
                nodes["Face_(merged)baked001_4"].morphTargetInfluences
              }
            />
            <skinnedMesh
              name="Face_(merged)baked001_5"
              geometry={nodes["Face_(merged)baked001_5"].geometry}
              material={materials["N00_000_00_FaceBrow_00_FACE (Instance).001"]}
              skeleton={nodes["Face_(merged)baked001_5"].skeleton}
              morphTargetDictionary={
                nodes["Face_(merged)baked001_5"].morphTargetDictionary
              }
              morphTargetInfluences={
                nodes["Face_(merged)baked001_5"].morphTargetInfluences
              }
            />
            <skinnedMesh
              name="Face_(merged)baked001_6"
              geometry={nodes["Face_(merged)baked001_6"].geometry}
              material={
                materials["N00_000_00_FaceEyelash_00_FACE (Instance).001"]
              }
              skeleton={nodes["Face_(merged)baked001_6"].skeleton}
              morphTargetDictionary={
                nodes["Face_(merged)baked001_6"].morphTargetDictionary
              }
              morphTargetInfluences={
                nodes["Face_(merged)baked001_6"].morphTargetInfluences
              }
            />
            <skinnedMesh
              name="Face_(merged)baked001_7"
              geometry={nodes["Face_(merged)baked001_7"].geometry}
              material={
                materials["N00_000_00_FaceEyeline_00_FACE (Instance).001"]
              }
              skeleton={nodes["Face_(merged)baked001_7"].skeleton}
              morphTargetDictionary={
                nodes["Face_(merged)baked001_7"].morphTargetDictionary
              }
              morphTargetInfluences={
                nodes["Face_(merged)baked001_7"].morphTargetInfluences
              }
            />
          </group>
          <skinnedMesh
            name="Hair"
            geometry={nodes.Hair.geometry}
            material={materials["N00_000_Hair_00_HAIR (Instance).001"]}
            skeleton={nodes.Hair.skeleton}
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("models/MavisFinal.gltf");