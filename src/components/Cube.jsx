/* eslint-disable react/no-unknown-property */
import { PropTypes } from 'prop-types';

const Cube = (props) => {
  return (
    <mesh position={props.positions}>
      <boxGeometry args={props.size} />
      <meshStandardMaterial color={props.color} />
    </mesh>
  );
};

Cube.propTypes = {
  positions: PropTypes.array,
  size: PropTypes.array,
  color: PropTypes.string,
};

export default Cube;
