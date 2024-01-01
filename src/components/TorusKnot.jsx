/* eslint-disable react/no-unknown-property */
import { MeshWobbleMaterial } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useControls } from 'leva';
import { PropTypes } from 'prop-types';
import { useRef } from 'react';

const TorusKnot = (props) => {
    const ref = useRef();

    const {color, radius} = useControls({
        color: "lightblue",
        radius: {
            value: 5,
            min: 1,
            max: 10,
            step: 0.5
        }
    })

    // useFrame((state, delta) => {
    //     ref.current.rotation.x += delta;
    //     ref.current.rotation.y += delta * 2.0;
    //     ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2;
    // });

    return (
        <mesh position={props.positions} ref={ref}>
            <torusKnotGeometry args={[radius, ...props.size]} />
            {/* <meshStandardMaterial color={props.color} /> */}
            <MeshWobbleMaterial factor={2} speed={3} color={color}/>
        </mesh>
    );
};

TorusKnot.propTypes = {
    positions: PropTypes.array,
    size: PropTypes.array,
    color: PropTypes.string,
};

export default TorusKnot;
