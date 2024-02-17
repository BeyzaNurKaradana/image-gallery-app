import { useState } from "react";
import "./styles.css";
import images from "./images";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
      <h1>LANDSCAPE IMAGES</h1>
        <div className="container">
          <img src="" alt="selected" className="selected"/>
        </div>

        <div className="imgContainer">
          {images.map(img,index) => {
            <img src= {img} key={index} alt="landscape"/>
          }
          }
        </div>
      </div>
    </>
  );
}

export default App;
