import './App.css';
import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';

function App() {
  const boxRef = useRef();
  const divRef = useRef();

  const [count, setCount] = useState(0);

  // arrow function
  useEffect(() => {
    gsap.to(boxRef.current, { rotation: "+=360", x: "-=300" })
    // rotation = rotation + 360 => rotation += 360
  }, [])


  useEffect(() => {
    gsap.to(boxRef.current, { fontSize: "50px" })
  }, [count])

  useEffect(() => {
    if (count > 1) {
      gsap.to(divRef.current, { height: `+=${count * 50}px` })
    }
  }, [count])

  return (
    <div className="App">
      <header className="App-header">
        <p ref={boxRef}>
          Edit src/App.js and bom dia
        </p>

        <button onClick={() => { setCount(count + 1) }}>
          <p>mudar contador</p>
        </button>

        <div style={{ height: "100px", width: "50px", backgroundColor: "blue" }} ref={divRef}>

        </div>
      </header>
    </div>
  );
}

export default App;
