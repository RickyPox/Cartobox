"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import { Suspense, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

function Model() {
    const { scene } = useGLTF("/model/cartobox_model.glb");

    return (
        <Center>
            <primitive
                object={scene}
                scale={1}
                position={[-0.2, 50, 0]} // ajusta altura do modelo
            />
        </Center>
    );
}

// Componente para animar a câmera
function CameraAnimation({
    cameraRef,
    setOrbitEnabled,
    distance,
}: {
    cameraRef: React.RefObject<THREE.PerspectiveCamera | null>;
    setOrbitEnabled: (value: boolean) => void;
    distance: number;
}) {
    const initialDistanceRef = useRef(distance);
    useEffect(() => {
        if (!cameraRef.current) return;
        const z = initialDistanceRef.current;
        const camera = cameraRef.current;
        const target = new THREE.Vector3(0, 0, 0);
        // Desativa orbitControls no início
        setOrbitEnabled(false);

        // Animação da posição da câmera
        gsap.fromTo(
            camera.position,
            { x: 500, y: 500, z: 500 },
            {
                x: 0,
                y: 0,
                z: z,
                duration: 1.5,
                ease: "power2.inOut",
                onUpdate: () => {
                    camera.lookAt(target); // mantém a rotação sincronizada
                },
                onComplete: () => {
                    // Ativa orbitControls quando termina
                    setOrbitEnabled(true);
                },
            }
        );
    }, [cameraRef, setOrbitEnabled]);

    return null;
}

export default function ThreeModel() {
    const [distance, setDistance] = useState(185); // default desktop
    const [orbitEnabled, setOrbitEnabled] = useState(false);
    const cameraRef = useRef<THREE.PerspectiveCamera>(null);

    const degToRad = (deg: number) => (deg * Math.PI) / 180;

    // Ajusta distância do OrbitControls conforme tamanho da tela
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;

            if (width < 425) setDistance(450); // mobile menor
            else if (width < 640) setDistance(300); // mobile maior
            else if (width < 1024) setDistance(270); // tablet
            else setDistance(185); // desktop
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <Canvas>
            {/* CÂMERA */}
            <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 10, 50]} fov={45} />

            {/* ANIMAÇÃO DA CÂMERA */}
            <CameraAnimation distance={distance} cameraRef={cameraRef} setOrbitEnabled={setOrbitEnabled} />

            {/* LUZES */}
            <ambientLight intensity={4} />
            <directionalLight position={[5, 5, 5]} intensity={3} />

            {/* MODELO */}
            <Suspense fallback={null}>
                <Model />
            </Suspense>

            {/* ORBIT CONTROLS */}
            <OrbitControls
                enabled={orbitEnabled}
                enableZoom={false}
                enablePan={false}
                minDistance={distance}
                maxDistance={distance}
                minAzimuthAngle={degToRad(-20)}
                maxAzimuthAngle={degToRad(20)}
                minPolarAngle={degToRad(60)}
                maxPolarAngle={degToRad(90)}
            />
        </Canvas>
    );
}
