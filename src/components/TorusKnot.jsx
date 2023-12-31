/* eslint-disable react/no-unknown-property */
import { MeshWobbleMaterial } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { PropTypes } from 'prop-types';
import { useRef } from 'react';

const TorusKnot = (props) => {
    const ref = useRef();

    // useFrame((state, delta) => {
    //     ref.current.rotation.x += delta;
    //     ref.current.rotation.y += delta * 2.0;
    //     ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2;
    // });

    return (
        <mesh position={props.positions} >
            <torusKnotGeometry args={props.size} />
            {/* <meshStandardMaterial color={props.color} /> */}
            <MeshWobbleMaterial factor={2} speed={3}/>
        </mesh>
    );
};

TorusKnot.propTypes = {
    positions: PropTypes.array,
    size: PropTypes.array,
    color: PropTypes.string,
};

export default TorusKnot;
