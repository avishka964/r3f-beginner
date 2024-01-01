/* eslint-disable react/no-unknown-property */
import { PropTypes } from 'prop-types';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const Cube = (props) => {
  const ref = useRef()

  useFrame((state, delta) => {
    ref.current.rotation.x += delta
    ref.current.rotation.y += delta * 2.0
    // ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2
  })

  return (
    <mesh position={props.positions} ref={ref}>
      <boxGeometry args={props.size} scale={props.scale}/>
      <meshPhongMaterial color={props.color} />
    </mesh>
  );
};

Cube.propTypes = {
  positions: PropTypes.array,
  size: PropTypes.array,
  scale: PropTypes.scale,
  color: PropTypes.string,
};

export default Cube;
