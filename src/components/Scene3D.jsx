import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sparkles } from '@react-three/drei'
import * as THREE from 'three'

/* ---- Floating Music Note ---- */
function MusicNote({ position, scale = 1, speed = 1, color = '#d4a843' }) {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005 * speed
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.15
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 0.3) * 0.3
    }
  })

  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={0.6}>
      <group ref={meshRef} position={position} scale={scale}>
        {/* Note head */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Note stem */}
        <mesh position={[0.18, 0.6, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 1.2, 8]} />
          <meshStandardMaterial color={color} metalness={0.6} roughness={0.3} />
        </mesh>
        {/* Note flag */}
        <mesh position={[0.3, 1.0, 0]} rotation={[0, 0, -0.5]}>
          <planeGeometry args={[0.3, 0.25]} />
          <meshStandardMaterial color={color} metalness={0.6} roughness={0.3} side={THREE.DoubleSide} />
        </mesh>
      </group>
    </Float>
  )
}

/* ---- Floating Ring (represents brass bells) ---- */
function BrassRing({ position, scale = 1, speed = 1 }) {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003 * speed
      meshRef.current.rotation.y += 0.005 * speed
    }
  })

  return (
    <Float speed={speed * 0.5} rotationIntensity={0.3} floatIntensity={0.4}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <torusGeometry args={[0.4, 0.08, 16, 32]} />
        <meshStandardMaterial
          color="#d4a843"
          metalness={0.9}
          roughness={0.1}
          emissive="#a07a2f"
          emissiveIntensity={0.1}
        />
      </mesh>
    </Float>
  )
}

/* ---- Particles Background ---- */
function ParticleField() {
  const count = 200
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15
    }
    return pos
  }, [])

  const pointsRef = useRef()
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#d4a843"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

/* ---- Floating Drum ---- */
function FloatingDrum({ position, scale = 1, speed = 1, color = '#e05a6d' }) {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.002 * speed
      meshRef.current.rotation.y += 0.004 * speed
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 0.4) * 0.2
    }
  })

  return (
    <Float speed={speed * 0.8} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={meshRef} position={position} scale={scale}>
        {/* Drum Body */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 0.4, 16]} />
          <meshStandardMaterial color={color} metalness={0.4} roughness={0.6} />
        </mesh>
        {/* Top Rim */}
        <mesh position={[0, 0.2, 0]}>
          <torusGeometry args={[0.3, 0.02, 8, 24]} />
          <meshStandardMaterial color="#d4a843" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Bottom Rim */}
        <mesh position={[0, -0.2, 0]}>
          <torusGeometry args={[0.3, 0.02, 8, 24]} />
          <meshStandardMaterial color="#d4a843" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>
    </Float>
  )
}

/* ---- Main 3D Scene ---- */
export default function Scene3D() {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      pointerEvents: 'none'
    }}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} color="#fff5e0" />
        <pointLight position={[-3, 2, 4]} intensity={0.5} color="#d4a843" />
        <pointLight position={[3, -2, 3]} intensity={0.3} color="#4a6cf7" />
        <pointLight position={[0, 4, 0]} intensity={0.2} color="#e05a6d" />

        {/* Music Notes */}
        <MusicNote position={[-3.5, 1.5, -1]} scale={0.8} speed={0.7} />
        <MusicNote position={[3.2, -1, -2]} scale={0.6} speed={1.2} color="#f0d078" />
        <MusicNote position={[-2, -1.5, 0]} scale={0.5} speed={0.9} />
        <MusicNote position={[4, 2, -3]} scale={0.7} speed={0.6} color="#f0d078" />
        <MusicNote position={[-4.5, 0, -2]} scale={0.4} speed={1.1} />
        <MusicNote position={[1, 2.5, -1.5]} scale={0.5} speed={0.8} color="#25d366" />
        <MusicNote position={[5, 0, -1]} scale={0.3} speed={1.3} color="#4a6cf7" />

        {/* Brass Rings */}
        <BrassRing position={[2.5, 1.8, -1.5]} scale={0.7} speed={0.8} />
        <BrassRing position={[-1.5, 2.5, -2]} scale={0.5} speed={1.0} />
        <BrassRing position={[0.5, -2, -1]} scale={0.6} speed={0.6} />
        <BrassRing position={[-3, -2.5, -3]} scale={0.8} speed={0.7} />

        {/* Floating Drums */}
        <FloatingDrum position={[-2.5, 0, -2]} scale={0.8} speed={0.9} />
        <FloatingDrum position={[3.5, 0.5, -2.5]} scale={0.6} speed={1.1} color="#4a6cf7" />
        <FloatingDrum position={[2, -2.5, -1.5]} scale={0.5} speed={0.8} color="#25d366" />

        {/* Sparkles */}
        <Sparkles
          count={120}
          scale={15}
          size={1.8}
          speed={0.4}
          color="#d4a843"
          opacity={0.5}
        />

        {/* Particle Field */}
        <ParticleField />
      </Canvas>
    </div>
  )
}
