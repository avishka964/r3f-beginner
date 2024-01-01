/* eslint-disable react/no-unknown-property */
import { Plane, useTexture } from '@react-three/drei';
import {LinearSRGBColorSpace} from 'three';

const Floor = () => {

  const terrainTextures = useTexture({
    map: '../textures/aerial_rocks_02_diff_4k.jpg',
    displacementMap: '../textures/aerial_rocks_02_disp_4k.jpg',
    aoMap: "/textures/aerial_rocks_02_arm_4k_ao_edited.jpg",
    roughnessMap: "/textures/aerial_rocks_02_arm_4k_roughness_edited.jpg",
    metalnessMap: "/textures/aerial_rocks_02_arm_4k_metalness_edited.jpg",
    normalMap: "/textures/aerial_rocks_02_nor_gl_4k_edited.jpg",
    alphaMap: "/textures/alpha.png",
  });

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[40, 40]} />
      <meshStandardMaterial color="#666" />
    </mesh>
    // <Plane args={[10, 10, 128, 128]} rotation={[-Math.PI / 2, 0, 0]}>
    //   <meshStandardMaterial 
    //       {...terrainTextures} 
    //       // normalMapType={LinearSRGBColorSpace}
    //       // transparent
    //   />
    // </Plane>
  );
};

export default Floor;