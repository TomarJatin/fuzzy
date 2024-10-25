"use client";

import { Canvas } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Box } from "@react-three/drei";
import gsap from "gsap";

export function ScrollCube() {
  const cubeRef = useRef<THREE.Mesh>(null);

  // Handle scroll event to move the cube
  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (cubeRef.current) {
      gsap.to(cubeRef.current.position, {
        y: scrollY * 0.01, // Adjust the multiplier for speed
        duration: 0.5,
        ease: "power2.out",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box ref={cubeRef} args={[1, 1, 1]} position={[0, 0, 0]}>
        <meshStandardMaterial attach="material" color="orange" />
      </Box>
    </Canvas>
  );
}