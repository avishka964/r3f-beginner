/* eslint-disable react/no-unknown-property */
import { OrbitControls, Sky, Text } from '@react-three/drei';
import { useState } from 'react';
import Cube from './Cube';
import { Interactive } from '@react-three/xr';


const Scene = () => {

    const [hover, setHover] = useState(false);
    const [color, setColor] = useState(0x123456);

    const onSelect = () => {
        setColor((Math.random() * 0xffffff) | 0);
    };



    return (
        <>
            {/* <directionalLight position={[0, 0, 2]} /> */}
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Interactive onSelect={onSelect} onHover={() => setHover(true)} onBlur={() => setHover(false)}>

                <Cube positions={[0, 0.9, -1]} scale={hover ? [2, 2, 2] : [1, 1, 1]} color={color} size={[1, 1, 1]} />
                {/* <Text position={[0, 0, 0.06]} fontSize={0.1} color="#000" anchorX="center" anchorY="middle">
                    Rotating Cube
                </Text> */}
                <OrbitControls />
                {/* <OrbitControls enableZoom={false} /> */}
            </Interactive>
        </>
    );
};

export default Scene;