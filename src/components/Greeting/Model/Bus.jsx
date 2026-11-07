import React, { useRef, useEffect, useState, forwardRef } from "react";
import { useFrame, useLoader, extend, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import map from "../../../assets/map.png";

extend({ OrbitControls });

const Bus = forwardRef((props, ref) => {
  const gltf = useLoader(GLTFLoader, "/bus-animation/scene.gltf");
  const wheelRefs = useRef([]);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (ref.current) {
      ref.current.scale.set(3, 3, 3);
      ref.current.position.y = -0.35; // Adjust this value to align with the map plane
    }
  }, [gltf, ref]);

  if (!gltf) {
    return null;
  }

  gltf.scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true; // Ensure bus meshes cast shadows
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useFrame(() => {
    const scrollFactor = 0.02;
    const newPositionZ = scrollPosition * scrollFactor;

    if (ref.current) {
      ref.current.position.z = newPositionZ;
    }
  });

  return <primitive ref={ref} object={gltf.scene} {...props} />;
});

function BusControls({ busRef }) {
  const { camera, gl } = useThree();
  const controls = useRef();

  useFrame(() => {
    if (controls.current) {
      controls.current.update();
    }
  });

  return (
    <orbitControls
      ref={controls}
      args={[camera, gl.domElement]}
      // Removed target prop
      enablePan={true}
      enableZoom={true}
      maxPolarAngle={Math.PI / 2} // Optional: Limit camera rotation to top half
    />
  );
}

function MapPlane() {
  const mapTexture = useLoader(TextureLoader, map);
  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -0.5, 0]}
      receiveShadow
      style={{ borderRadius: "50px", overflow: "hidden" }}
    >
      <planeGeometry args={[39, 38]} />
      <meshStandardMaterial
        map={mapTexture}
        color="#ffffff"
        emissive="#ffffff"
        emissiveIntensity={0.0001}
      />
    </mesh>
  );
}

function BusScene() {
  const busRef = useRef();

  return (
    <>
      <MapPlane />
      <Bus ref={busRef} />
      {/* {busRef.current && <BusControls busRef={busRef} />} */}
      <BusControls />
    </>
  );
}

export default BusScene;
