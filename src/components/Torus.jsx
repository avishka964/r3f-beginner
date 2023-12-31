/* eslint-disable react/no-unknown-property */
import { PropTypes } from 'prop-types';

const Torus = (props) => {
  return (
    <mesh position={props.positions} >
      <torusGeometry args={props.size} />
      <meshStandardMaterial color={props.color} />
    </mesh>
  );
};

Torus.propTypes = {
  positions: PropTypes.array,
  size: PropTypes.array,
  color: PropTypes.string,
};

export default Torus;
