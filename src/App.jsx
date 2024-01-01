/* eslint-disable react/no-unknown-property */

import { Canvas } from '@react-three/fiber';
import './App.css';
import Scene from './components/Scene';
import { VRButton, XR, Controllers, Hands } from '@react-three/xr';
import { OrbitControls, Sky, Text } from '@react-three/drei';
import Floor from './components/Floor';
import Background from './components/Background';


const App = () => {

  return (
    <>
      <VRButton
        style={{
          position: "absolute",
          bottom: "24px",
          padding: "12px 24px",
          width: "auto",
          border: "1px solid  white",
          borderRadius: "4px",
          background: "rgba(0, 0, 0, 0.1)",
          color: "white",
          font: "0.8125rem sans-serif",
          outline: "none",
          zIndex: 99999,
          cursor: "pointer",
          top: "10px",
          right: "10px",
          height: "40px",
          opacity: 0.5,
          userSelect: "none",
        }}
      >
        VR
      </VRButton>
      <Canvas>
        <XR>
          {/* <Sky sunPosition={[0, 1, 0]}/>
          <Floor /> */}
          <Background />
          {/* <ambientLight />
          <pointLight position={[10, 10, 10]} /> */}
          <Controllers />
          <Hands />
          <Scene />
        </XR>
      </Canvas>
    </>
  );
};

export default App;
