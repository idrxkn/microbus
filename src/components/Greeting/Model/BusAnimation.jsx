import React from "react";
import BusScene from "./Bus";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

function BusAnimation() {
  return (
    <div
      style={{
        height: "450px",
        width: "450px",
        overflow: "hidden",
        borderRadius: "25px",
        filter: "drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.09))",
        left: "100px",
      }}
      className="bus-model"
    >
      <Canvas
        shadows
        camera={{ position: [0, 23, 1] }}
        onCreated={({ gl }) => {
          gl.shadowMap.enabled = true;
          gl.shadowMap.type = THREE.PCFSoftShadowMap;
        }}
        style={{ pointerEvents: "none" }}
      >
        <ambientLight intensity={1.02} />
        <directionalLight
          position={[15, 15, 15]}
          intensity={3.5}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />

        <BusScene />

        <EffectComposer>
          <Bloom
            luminanceThreshold={0.87}
            luminanceSmoothing={0.2}
            height={300}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}

export default BusAnimation;
