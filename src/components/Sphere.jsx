/* eslint-disable react/no-unknown-property */
import { PropTypes } from 'prop-types';

const Sphere = (props) => {
  return (
    <mesh position={props.positions} >
      <sphereGeometry args={props.size} />
      <meshStandardMaterial color={props.color} wireframe/>
    </mesh>
  );
};

Sphere.propTypes = {
  positions: PropTypes.array,
  size: PropTypes.array,
  color: PropTypes.string,
};

export default Sphere;
