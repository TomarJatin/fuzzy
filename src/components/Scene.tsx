"use client";
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

// comment

const Scene = () => {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </Canvas>
  )
}

export default Scene