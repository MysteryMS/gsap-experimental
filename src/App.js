import './App.css';
import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';

const imgStyle = {
  width: "250px",
  height: "auto"
}

const getRandomPosition = () => {
  const width = 500;
  const height = 200;

  return {
    x: Math.random() * width,
    y:Math.random() * height
  }
}


function App() {
  const tl = useRef();
  const parent = useRef();
  const q = gsap.utils.selector(parent)

  useEffect(() => {
    setInterval(() => {
      console.log(window.outerWidth)
      tl.current = gsap.timeline()
      .to(q('#i'), getRandomPosition())
      .to(q('#i2'), getRandomPosition())
      .to(q('#i3'), getRandomPosition())
      .to(q('#i4'), getRandomPosition())
      .to(q('#i5'), getRandomPosition())
      .to(q('#i6'), getRandomPosition())
      .to(q('#i7'), getRandomPosition())
      .to(q('#i8'), getRandomPosition())
      .to(q('#i9'), getRandomPosition())
      .to(q('#i10'), getRandomPosition())
    }, 1500)
  }, [])

  return (
    <div className="App" ref={parent} style={{overflow: 'hidden', height: '100vh'}}>
      <body>
        <img id="i" src="/img0.jpg" style={imgStyle} />
        <img id="i2" src="/img1.jpg" style={imgStyle} />
        <img id="i3" src="/img2.jpg" style={imgStyle} />
        <img id="i4" src="/img3.jpg" style={imgStyle} />
        <img id="i5" src="/img4.jpg" style={imgStyle} />
        <img id="i6" src="/img5.jpg" style={imgStyle} />
        <img id="i7" src="/img6.jpg" style={imgStyle} />
        <img id="i8" src="/img7.jpg" style={imgStyle} />
        <img id="i9" src="/img8.jpg" style={imgStyle} />
        <img id="i10" src="/img9.jpg" style={imgStyle} />
      </body>
    </div>
  );
}

export default App;
