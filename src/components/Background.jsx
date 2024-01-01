import { Environment, useEnvironment } from '@react-three/drei';

const Background = () => {

  const envMap = useEnvironment({ path: "/background" });

  return (
    <Environment map={envMap} background />
  )
}

export default Background