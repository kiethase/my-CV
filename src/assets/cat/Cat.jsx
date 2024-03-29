/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Suushimi (https://sketchfab.com/Suushimi)
license: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
source: https://sketchfab.com/3d-models/cat-70a23788ef984a7a9a1c9a9fe6d5a651
title: Cat
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function CatModel(props) {
  const { nodes, materials } = useGLTF("/models/cat.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.lambert2SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.lambert2SG}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/cat.glb");
