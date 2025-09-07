import {
  AccumulativeShadows,
  Center,
  Environment,
  Grid,
  MeshTransmissionMaterial,
  OrbitControls,
  RandomizedLight,
  useGLTF,
} from "@react-three/drei";
import { Group, Mesh } from "three";
import { AmbientLight } from "three";
import {
  EffectComposer,
  Bloom,
  ToneMapping,
  DepthOfField,
  Noise,
} from "@react-three/postprocessing";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

const ThreeHero = () => {
  return (
    <Canvas shadows camera={{ position: [15, 0, 15], fov: 25 }}>
      <fog attach="fog" args={["black", 15, 22.5]} />
      <ambientLight intensity={Math.PI} />
      <group>
        <Center top>
          <Book scale={0.1} position={[0, 0, 0]} />
          <Grid
            renderOrder={-1}
            position={[0, -1.58, 0]}
            infiniteGrid
            cellSize={0.6}
            cellThickness={0.6}
            sectionSize={3.3}
            sectionThickness={1.5}
            sectionColor={[0.5, 0.5, 10]}
            fadeDistance={30}
          />
          {/* <mesh castShadow receiveShadow>
              <boxGeometry args={[4, 4, 4]} />
              <meshStandardMaterial color="#3ead5d" />
              </mesh> */}
        </Center>
        <AccumulativeShadows
          temporal
          frames={100}
          alphaTest={0.9}
          color="#3ead5d"
          colorBlend={1}
          opacity={0.8}
          scale={20}
        >
          <RandomizedLight
            radius={10}
            ambient={0.5}
            intensity={Math.PI}
            position={[2.5, 8, -2.5]}
            bias={0.001}
          />
        </AccumulativeShadows>
      </group>
      <OrbitControls
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2}
        autoRotate
        autoRotateSpeed={0.05}
        makeDefault
      />
      <EffectComposer enableNormalPass={false}>
        <Bloom luminanceThreshold={2} mipmapBlur />
        <Noise opacity={0.02} />
        <ToneMapping />
      </EffectComposer>
      <Environment preset="city" background backgroundBlurriness={1} />
    </Canvas>
  );
};

function Book(props) {
  const config = {
    samples: 10,
    resolution: 2048,
    transmission: 1,
    roughness: 0.0,
    thickness: 3.5,
    ior: 1.5,
    chromaticAberration: 0.06,
    anisotropy: 0.1,
    distortion: 0.0,
    distortionScale: 0.3,
    temporalDistortion: 0.5,
    clearcoat: 1,
    attenuationDistance: 0.5,
    attenuationColor: "#ffffff",
    color: "#c9ffa1",
    bg: "#839681",
  };
  const { nodes } = useGLTF("/scene.glb");

  return (
    <group dispose={null}>
      <mesh geometry={nodes.book.geometry} castShadow receiveShadow>
        <MeshTransmissionMaterial
          background={new THREE.Color(config.bg)}
          samples={config.samples}
          resolution={config.resolution}
          transmission={config.transmission}
          roughness={config.roughness}
          thickness={config.thickness}
          ior={config.ior}
          chromaticAberration={config.chromaticAberration}
          anisotropy={config.anisotropy}
          distortion={config.distortion}
          distortionScale={config.distortionScale}
          temporalDistortion={config.temporalDistortion}
          clearcoat={config.clearcoat}
          attenuationDistance={config.attenuationDistance}
          attenuationColor={config.attenuationColor}
          color={config.color}
        />
      </mesh>
      <mesh
        geometry={nodes["part-book"].geometry}
        receiveShadow
        castShadow
      ></mesh>
    </group>
  );
}
