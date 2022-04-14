import React, { useCallback } from "react";
import "./App.css";

declare var $: any;

function App() {
  const demoRef = useCallback((node) => {
    if (node) {
      const w_device = $(window).width();
      $(node).slick({
        infinite: true,
        slidesToShow: w_device > 1200 ? 7 : w_device > 869 ? 5 : 2.5,
        slidesToScroll: w_device > 1200 ? 7 : w_device > 869 ? 5 : 2.5,
        centerPadding: "50px",
      });
    }
  }, []);

  return (
    <div className="container">
      <div>
        <h4 className="mt-5 mb-5">New Release</h4>
      </div>
      <div ref={demoRef} className="slider demo NewRelease-BG">
        <div id="New_1" className="pointer slide-item">
          <div className="p-3">
            <img src="./img/Rectangle 266.png" alt="" />
          </div>
        </div>
        <div id="New_2" className="pointer slide-item">
          <div className="p-3">
            <img src="./img/Rectangle 291.png" alt="" />
          </div>
        </div>
        <div id="New_3" className="pointer slide-item">
          <div className="p-3">
            <img src="./img/Rectangle 286.png" alt="" />
          </div>
        </div>
        <div id="New_4" className="pointer slide-item">
          <div className="p-3">
            <img src="./img/Rectangle 288.png" alt="" />
          </div>
        </div>
        <div id="New_5" className="pointer slide-item">
          <div className="p-3">
            <img src="./img/Rectangle 289.png" alt="" />
          </div>
        </div>
        <div id="New_6" className="pointer slide-item">
          <div className="p-3">
            <img src="./img/Rectangle 291.png" alt="" />
          </div>
        </div>
        <div id="New_7" className="pointer slide-item">
          <div className="p-3">
            <img src="./img/Rectangle 292.png" alt="" />
          </div>
        </div>
        <div id="New_8" className="pointer slide-item">
          <div className="p-3">
            <img src="./img/Rectangle 295.png" alt="" />
          </div>
        </div>
        <div id="New_9" className="pointer slide-item">
          <div className="p-3">
            <img src="./img/Rectangle 266.png" alt="" />
          </div>
        </div>
        <div id="New_10" className="pointer slide-item">
          <div className="p-3">
            <img src="./img/Rectangle 291.png" alt="" />
          </div>
        </div>
        <div id="New_11" className="pointer slide-item">
          <div className="p-3">
            <img src="./img/Rectangle 286.png" alt="" />
          </div>
        </div>
        <div id="New_12" className="pointer slide-item">
          <div className="p-3">
            <img src="./img/Rectangle 288.png" alt="" />
          </div>
        </div>
        <div id="New_13" className="pointer slide-item">
          <div className="p-3">
            <img src="./img/Rectangle 289.png" alt="" />
          </div>
        </div>
        <div id="New_14" className="pointer slide-item">
          <div className="p-3">
            <img src="./img/Rectangle 291.png" alt="" />
          </div>
        </div>
        <div id="New_15" className="pointer slide-item">
          <div className="p-3">
            <img src="./img/Rectangle 292.png" alt="" />
          </div>
        </div>
        <div id="New_16" className="pointer slide-item">
          <div className="p-3">
            <img src="./img/Rectangle 295.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
