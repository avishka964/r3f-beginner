/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber';
import './App.css';

const App = () => {
  return (
    <Canvas>
      <directionalLight position={[0, 0, 2]}/>
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color={'green'} />
      </mesh>
    </Canvas>
  );
};

export default App;
