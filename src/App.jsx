/* eslint-disable react/no-unknown-property */

import { Canvas } from '@react-three/fiber';
import './App.css';
import Scene from './components/Scene';
import { VRButton, XR, Controllers, Hands } from '@react-three/xr';


const App = () => {
  return (
    <>
      <VRButton />
      <Canvas>
        <XR>
          <Controllers />
          <Hands />
          <Scene />
        </XR>
      </Canvas>
    </>
  );
};

export default App;
