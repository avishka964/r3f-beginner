/* eslint-disable react/no-unknown-property */
import { OrbitControls, useHelper} from '@react-three/drei';
import { useRef } from 'react';
import { DirectionalLightHelper } from 'three';
import TorusKnot from './TorusKnot';

const Scene = () => {

    const directionalLightRef = useRef()

    useHelper(directionalLightRef, DirectionalLightHelper, 0.5, "white")

    return (
        <>
            <directionalLight 
                position={[0, 0, 2]} 
                intensity={0.5} 
                ref={directionalLightRef}
            />
            <ambientLight intensity={0.5}/>

            <TorusKnot positions={[0, 0, 0]} color="red" size={[1, 0.1, 1000, 50]} />
            <OrbitControls enableZoom={false} />
        </>
    );
};

export default Scene;