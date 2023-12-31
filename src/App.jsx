/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber';
import './App.css';
import Cube from './components/Cube';

const App = () => {
  return (
    <Canvas>
      <directionalLight position={[0, 0, 2]} />
      {/* <ambientLight intensity={0.1}/> */}

      <group position={[0, -1, 0]}>
      <Cube positions={[1, 0, 0]} side={[1, 1, 1]} color="green"/>
      <Cube positions={[-1, 0, 0]} side={[1, 1, 1]} color="blue"/>
      <Cube positions={[1, 2, 0]} side={[1, 1, 1]} color="orange"/>
      <Cube positions={[-1, 2, 0]} side={[1, 1, 1]} color="pink"/>
      </group>

    </Canvas>
  );
};

export default App;
