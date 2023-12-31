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

      <Sphere positions={[0, 0, 0]} color="red" size={[1, 30, 30]} />

    </Canvas>
  );
};

export default App;
