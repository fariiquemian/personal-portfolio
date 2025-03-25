import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
    
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 1 : 0.8}
        position={isMobile ? [0, -3.5, -2.2] : [0, -3.75, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showDragHint, setShowDragHint] = useState(true);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Timer to hide drag hint after 3 seconds
    const hintTimer = setTimeout(() => {
      setShowDragHint(false);
    }, 4000);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
      clearTimeout(hintTimer);
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <Canvas
        frameloop='demand'
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 0, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        onClick={() => setShowDragHint(false)}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile} />
        </Suspense>

        <Preload all />
      </Canvas>

      {showDragHint && (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none flex items-center justify-center">
          <div className="bg-black/50 text-white px-6 py-3 rounded-full flex items-center space-x-2 animate-pulse">
            <span>👋 Drag to rotate the model</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComputersCanvas;