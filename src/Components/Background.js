import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Stars, CameraControls, Float } from '@react-three/drei'

function Background() {
  return (
    <div className="relative h-screen">
        <Canvas>
          <Float
            speed={2}
            rotationIntensity={2}
            floatIntensity={2}
            floatingRange={[0.5, 1]}
          >
            <Stars
              radius={30}
              depth={50}
              count={5000}
              factor={4}
              saturation={0}
              fade
              speed={0.3}
            />
          </Float>
          <CameraControls />
        </Canvas>
      </div>
  )
}

export default Background