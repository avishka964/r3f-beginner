import { Canvas } from '@react-three/fiber';
import './App.css';

const App = () => {
  return (
    <Canvas>
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color={'orange'} />
      </mesh>
    </Canvas>
  );
};

export default App;
