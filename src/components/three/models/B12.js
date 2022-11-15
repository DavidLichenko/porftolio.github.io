/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef, useEffect } from 'react'
import {useAnimations, useGLTF} from '@react-three/drei'
import {useFrame, useThree} from "react-three-fiber";

export default function Model(props) {
    const group = useRef()
    const refB12 = useRef()
    const { nodes, materials, animations } = useGLTF('../../../../b12.gltf')

    useEffect(() => {
        if (window.innerWidth > 768) {
            document.getElementById("CanvasSection").addEventListener("mousemove", MouseMove);
        }
        return () => {
            document.getElementById("CanvasSection").removeEventListener("mousemove", MouseMove);}
    }, []);
    function MouseMove(e) {
        refB12.current.rotation.x = -Math.PI*-1.1 + -e.clientY / window.innerHeight/2
        refB12.current.rotation.y = -Math.PI*1.2 + e.clientX / window.innerWidth

            // e.clientX / window.innerWidth

    }
    //Animation setting
    const { actions, mixer  } = useAnimations(animations, group)
    useEffect(() => {
        for (const anim in actions) {
            actions[anim].setLoop(THREE.LoopOnce)
        }

    }, [mixer]);


    return (
        <group ref={group} {...props} dispose={null} position={[-1, 1.08, -3.05]}>
            <group name="Scene">
                <group rotation={[-Math.PI / 2, 0 , Math.PI]} scale={4}>
                    <group name="root">
                        <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 1, 3.14]}>
                            <group name="Drone_StaticMesh_0">
                                <group name="B12" ref={refB12} rotation={[-Math.PI*-1,-Math.PI,0]}>
                                    <mesh name="Object_0" castShadow receiveShadow geometry={nodes.Object_0.geometry} material={materials.M_Drone} />
                                    <mesh name="Object_0_1"  receiveShadow geometry={nodes.Object_0_1.geometry} material={materials.M_eye_drone_Inst} />
                                </group>
                                <spotLight castShadow intensity={.9}  position={[1, 1, 0]} penumbra={1}/>
                                <spotLight castShadow intensity={.9} position={[-1, 1, 0]} penumbra={1}/>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    )

}


useGLTF.preload('../../../../b12.gltf')
