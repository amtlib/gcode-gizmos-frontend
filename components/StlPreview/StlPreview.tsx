import { Box, Flex, Spinner } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export const StlPreview = ({ url }: { url: string }) => {
    const containerRef = useRef(null);
    const controlsRef = useRef(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const container = containerRef.current;

        // Set up scene, camera, and renderer
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xffffff);
        const camera = new THREE.PerspectiveCamera(
            45,
            container.clientWidth / container.clientHeight,
            1,
            1000
        );
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(renderer.domElement);

        // Set up orbit controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controlsRef.current = controls;

        // Load STL file
        const loader = new STLLoader();

        loader.load(url, geometry => {
            setLoading(false);
            // Center the geometry
            geometry.center();

            // Create mesh and add to scene
            const material = new THREE.MeshNormalMaterial();
            const mesh = new THREE.Mesh(geometry, material);
            scene.add(mesh);

            const floorSize = Math.max(geometry.boundingBox.max.x - geometry.boundingBox.min.x, geometry.boundingBox.max.z - geometry.boundingBox.min.z) * 2;
            const floorDivisions = Math.ceil(floorSize / 10);
            const gridHelper = new THREE.GridHelper(floorSize, floorDivisions, 0x888888, 0x888888);
            gridHelper.position.set(0, geometry.boundingBox.min.y, 0);
            scene.add(gridHelper);

            // Add directional light to scene
            const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
            directionalLight.position.set(-1, 1, 1);
            scene.add(directionalLight);

            // Position camera to show whole model
            const boundingBox = new THREE.Box3().setFromObject(mesh);
            const center = boundingBox.getCenter(new THREE.Vector3());
            const size = boundingBox.getSize(new THREE.Vector3());
            const distance = Math.max(size.x, size.y, size.z);
            camera.position.set(center.x, center.y, center.z + distance * 2);

            // Render scene
            const animate = () => {
                requestAnimationFrame(animate);
                controls.update();
                renderer.render(scene, camera);
            };
            animate();
        });

        return () => {
            // Clean up Three.js objects
            controls.dispose();
            renderer.dispose();
            scene.remove(scene.children[0]);
        };
    }, [url]);

    return (<>
        {loading && <Spinner />}
        <Box ref={containerRef} style={{ backgroundColor: '#eee', height: 400, opacity: loading ? "0" : "1" }} />
    </>);
}