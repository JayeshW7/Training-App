import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment, Html } from '@react-three/drei'
import { Suspense, useState } from 'react'

function Model({ url, onError }) {
  const { scene } = useGLTF(url)
  return <primitive object={scene} scale={1} />
}

const Plant3DViewer = ({ modelUrl }) => {
  const [hasError, setHasError] = useState(false)

  return (
    <div style={{ width: '100%', height: '300px', position: 'relative' }}>
      {hasError ? (
        <div style={{ 
          width: '100%', 
          height: '100%', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          background: '#f5f5f5',
          borderRadius: '8px'
        }}>
          <p>3D model not available</p>
        </div>
      ) : (
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <Suspense fallback={
            <Html center>
              <div style={{ 
                background: 'rgba(255,255,255,0.8)', 
                padding: '10px', 
                borderRadius: '4px',
                color: '#333'
              }}>
                Loading 3D model...
              </div>
            </Html>
          }>
            <Model 
              url={modelUrl} 
              onError={() => setHasError(true)}
            />
            <Environment preset="sunset" />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <OrbitControls 
              enableZoom={true}
              enablePan={true}
              enableRotate={true}
              minDistance={2}
              maxDistance={10}
              minPolarAngle={Math.PI / 4}
              maxPolarAngle={Math.PI / 2}
            />
          </Suspense>
        </Canvas>
      )}
    </div>
  )
}

export default Plant3DViewer 