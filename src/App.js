import './App.css';
import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';

const imgStyle = {
  width: "200px",
  height: "200px",
  objectFit: "cover",
  display: "none",
  opacity: "0.0",
}

function App() {
  const tl = useRef();
  const tl2 = useRef();
  const tl3 = useRef();
  const parent = useRef();
  const q = gsap.utils.selector(parent)
  const [audio] = useState(new Audio('https://cdn.discordapp.com/attachments/909079509997879337/1010586586859184250/she_-_Electric_Girl_HQ_NG7IYLByWCI.m4a'))
  const [showText, setShowText] = useState(false);
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    audio.autoplay = true

    setTimeout(() => {
      setShowText(true);
      console.log("showing text")
    }, 26000)

    setTimeout(() => {
      setGlitch(true);
      console.log("glitching")
    }, 11800)

    tl.current = gsap.timeline()
      .to(q('#i'), { display: "block" })
      .to(q('#i'), { opacity: "1.0", duration: 0.50, stagger: 0.55 })
      .to(q('#i'), { opacity: "0.0", duration: 0.50, stagger: 0.55 })
      .to(q('#i'), { display: "none" })
      .repeat(1)
      .delay(2)


  }, [])

  useEffect(() => {
    if (showText) {
      tl2.current = gsap.timeline()
        .to(q('#t'), { opacity: "1.0", duration: 0.50, stagger: 0.20 })
        .to(q('#t'), { opacity: "0.0", duration: 0.50, stagger: 0.10 })
    }
  }, [showText])

  useEffect(() => {
    if (glitch) {
      tl3.current = new gsap.timeline()
        .to(q('body'), { backgroundColor: "white", duration: 0.10 })
        .to(q('body'), { backgroundColor: "black", duration: 0.10 })
        .repeat(1)

    }
  })

  return (
    <div className="App" ref={parent}>
      <body>
        <div id='parent' style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
          <img id='i' src="/img0.jpg" alt="img0" style={{ ...imgStyle, margin: "0 45px 59px 0" }} />
          <img id='i' src="/img1.jpg" alt="img1" style={{ ...imgStyle, margin: "40px 72px 100px 89px" }} />
          <img id='i' src="/img2.jpg" alt="img2" style={{ ...imgStyle, margin: "74px 41px 87px 90px" }} />
          <img id='i' src="/img3.jpg" alt="img3" style={{ ...imgStyle, margin: "94px 77px 75px 136px" }} />
          <img id='i' src="/img4.jpg" alt="img4" style={{ ...imgStyle, margin: "63px 41px 0 77px" }} />
          <img id='i' src="/img5.jpg" alt="img5" style={{ ...imgStyle, margin: "97px 74px 0 78px" }} />

          <div style={{ display: "flex", width: "100%", height: "100%", alignItems: "center", justifyContent: "center", }}>
            <p id='t'>I'll </p>
            <p id='t'>remind </p>
            <p id='t'>you </p>
            <p id='t'>how </p>
            <p id='t'>it </p>
            <p id='t'>feels </p>
            <p id='t'>like... </p>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
