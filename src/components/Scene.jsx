/* eslint-disable react/no-unknown-property */
import { OrbitControls, useHelper} from '@react-three/drei';
import { useControls } from 'leva';
import { useRef } from 'react';
import { DirectionalLightHelper } from 'three';
import TorusKnot from './TorusKnot';

const Scene = () => {

    const directionalLightRef = useRef()

    const {lightColor, lightIntensity} = useControls({
        lightColor: "white",
        lightIntensity: {
            value: 0.5,
            min: 0, 
            max: 5
        }
    })

    useHelper(directionalLightRef, DirectionalLightHelper, 0.5, "white")

    return (
        <>
            <directionalLight 
                position={[0, 0, 2]} 
                intensity={lightIntensity} 
                ref={directionalLightRef}
                color={lightColor}
            />
            <ambientLight intensity={0.5}/>

            <TorusKnot positions={[0, 0, 0]} color="red" size={[0.1, 1000, 50]} />
            <OrbitControls enableZoom={false} />
        </>
    );
};

export default Scene;