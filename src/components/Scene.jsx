/* eslint-disable react/no-unknown-property */
import { OrbitControls } from '@react-three/drei';
import TorusKnot from './TorusKnot';

const Scene = () => {

    return (
        <>
            <directionalLight position={[0, 0, 2]} />

            <TorusKnot positions={[0, 0, 0]} color="red" size={[1, 0.1, 1000, 50]} />
            <OrbitControls enableZoom={false} />
        </>
    );
};

export default Scene;