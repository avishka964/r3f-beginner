/* eslint-disable react/no-unknown-property */
import { useFrame } from '@react-three/fiber';
import { PropTypes } from 'prop-types';
import { useState, useRef } from 'react';

const Sphere = (props) => {
  const ref = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useFrame((state, delta) => {
    const speed = isHovered ? 1 : 0.2;
    ref.current.rotation.y += delta * speed;
  });

  return (
    <mesh
      position={props.positions}
      ref={ref}
      onPointerEnter={(e) => (e.stopPropagation(), setIsHovered(true))}
      onPointerLeave={() => setIsHovered(false)}
      onClick={() => setIsClicked(!isClicked)}
      scale={isClicked ? 1.5 : 1}
    >
      <sphereGeometry args={props.size} />
      <meshStandardMaterial color={isHovered ? 'green' : props.color}  />
    </mesh>
  );
};

Sphere.propTypes = {
  positions: PropTypes.array,
  size: PropTypes.array,
  color: PropTypes.string,
};

export default Sphere;
