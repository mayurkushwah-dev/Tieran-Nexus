import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useEffect, useRef } from "react";

let mouseX = 0;
let mouseY = 0;

function MovingStars() {
    const groupRef = useRef();

    useFrame(() => {
    if (groupRef.current) {
        groupRef.current.rotation.y +=
        (mouseX * 0.1 - groupRef.current.rotation.y) * 0.05;

        groupRef.current.rotation.x +=
        (mouseY * 0.1 - groupRef.current.rotation.x) * 0.05;
    }
    });

    return (
    <group ref={groupRef}>
        <Stars
        radius={120}
        depth={80}
        count={7000}
        factor={5}
        saturation={0}
        fade
        speed={0.5}
        />
    </group>
    );
}

function Background() {
    useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
        window.removeEventListener("mousemove", handleMouseMove);
    };
    }, []);

    return (
    <div className="background">
        <Canvas camera={{ position: [0, 0, 1] }}>
        <ambientLight intensity={1} />
        <MovingStars />
        </Canvas>
    </div>
    );
}

export default Background;