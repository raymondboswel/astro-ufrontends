
import MicroFrontendC from "http://localhost:8080/bundle-c.js";
import { navigate } from 'astro:transitions/client';

function handleNavigation() {
  navigate("/");
}

function App() {
  return (
    <>
      <MicroFrontendC onNavigate={handleNavigation}/>
    </>
  );
}

export default App;
