import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>LANDSCAPE IMAGES</h1>

      <div>
        <div className="App"></div>

        <div className="imgContainer"></div>
      </div>
    </>
  );
}

export default App;
