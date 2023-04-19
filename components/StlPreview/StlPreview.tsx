import { Box, Spinner } from "@chakra-ui/react";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import * as THREE from "three";
import { OrbitControls } from '@react-three/drei'
import { Canvas, useLoader, useThree } from '@react-three/fiber';

function Loader() {
    return <p>Loading</p>
}

const ModelMesh = ({ url }) => {
    const geom = useLoader(STLLoader, url);
    const meshRef = useRef();
    const primitiveRef = useRef();
    const { camera } = useThree();

    useEffect(() => {
        geom.center();
        const boundingBox = new THREE.Box3().setFromObject(meshRef.current);
        const center = boundingBox.getCenter(new THREE.Vector3());
        const size = boundingBox.getSize(new THREE.Vector3());
        const distance = Math.max(size.x, size.y, size.z);
        
        camera.lookAt(geom);
        camera.position.set(center.x, center.y, center.z + distance * 2);
    }, [geom, camera]);

    return (
        <mesh ref={meshRef}>
            <meshNormalMaterial />
            <primitive ref={primitiveRef} object={geom} attach="geometry" />
        </mesh>
    )
}

export const StlPreview = ({ url }: { url: string }) => {
    return (
        <Box style={{ backgroundColor: '#eee', height: 400 }}>
            <Suspense fallback={<Loader />}>
                <Canvas>
                    <ambientLight />
                    <directionalLight position={[0, 0, 5]} />
                    <OrbitControls />
                    <ModelMesh url={url} />
                </Canvas>
            </Suspense>
        </Box>
    );
};