/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber';
import './App.css';
import Cube from './components/Cube';
import Sphere from './components/Sphere';
import Torus from './components/Torus';
import TorusKnot from './components/TorusKnot';

const App = () => {
  return (
    <Canvas>
      <directionalLight position={[0, 0, 2]} />

      {/* <Cube positions={[0, 0, 0]} size={[1, 1, 1]} color="green"/> */}
      <Sphere positions={[0, 0, 0]} color="red" size={[1, 30, 30]} />
      <Torus positions={[2, 0, 0]} color="blue" size={[0.5, 0.1, 30, 30]} />
      <TorusKnot positions={[-2, 0, 0]} color="orange" size={[0.5, 0.1, 1000, 50]}/>

    </Canvas>
  );
};

export default App;
