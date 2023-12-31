/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber';
import './App.css';
import Cube from './components/Cube';

const App = () => {
  return (
    <Canvas>
      <directionalLight position={[0, 0, 2]} />

      <Cube positions={[0, 0, 0]} side={[1, 1, 1]} color="green"/>

    </Canvas>
  );
};

export default App;
