/* eslint-disable react/no-unknown-property */
import { OrbitControls } from '@react-three/drei';
import Sphere from './Sphere';

const Scene = () => {

    return (
        <>
            <directionalLight position={[0, 0, 2]} />

            <Sphere positions={[0, 0, 0]} color="red" size={[1, 30, 30]} />
            <OrbitControls enableZoom={false} />
        </>
    );
};

export default Scene;