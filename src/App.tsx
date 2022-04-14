import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";

declare var $: any;

function App() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const items = [
      { id: "New_1", img: "./img/Rectangle 266.png" },
      { id: "New_2", img: "./img/Rectangle 291.png" },
      { id: "New_3", img: "./img/Rectangle 286.png" },
      { id: "New_4", img: "./img/Rectangle 288.png" },
      { id: "New_5", img: "./img/Rectangle 289.png" },
      { id: "New_6", img: "./img/Rectangle 291.png" },
      { id: "New_7", img: "./img/Rectangle 292.png" },
      { id: "New_8", img: "./img/Rectangle 295.png" },
      { id: "New_9", img: "./img/Rectangle 266.png" },
      { id: "New_10", img: "./img/Rectangle 291.png" },
      { id: "New_11", img: "./img/Rectangle 286.png" },
      { id: "New_12", img: "./img/Rectangle 288.png" },
      { id: "New_13", img: "./img/Rectangle 289.png" },
      { id: "New_14", img: "./img/Rectangle 291.png" },
      { id: "New_15", img: "./img/Rectangle 292.png" },
      { id: "New_16", img: "./img/Rectangle 295.png" },
    ];
    setItems(items);
  }, []);

  const demoRef = useCallback(
    (node) => {
      console.log("demo mount", node);
      if (node && items.length) {
        const w_device = $(window).width();
        $(node).slick({
          infinite: true,
          slidesToShow: w_device > 1200 ? 7 : w_device > 869 ? 5 : 2.5,
          slidesToScroll: w_device > 1200 ? 7 : w_device > 869 ? 5 : 2.5,
          centerPadding: "50px",
        });
      }
    },
    [items]
  );

  const handlePopupVideoMouseLeave = useMemo(
    () => () => {
      $(".popupVideo>.detail").hide();
    },
    []
  );

  return (
    <>
      <div className="container">
        <div>
          <h4 className="mt-5 mb-5">New Release</h4>
        </div>
        <div ref={demoRef} className="slider demo NewRelease-BG">
          {items.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </div>
      </div>
      <div className="popupVideo">
        <div className="detail" onMouseLeave={handlePopupVideoMouseLeave}>
          <div>Vido something</div>
          <h5>Title</h5>
          <p>xxxxx</p>
          <p>xxxxx</p>
        </div>
      </div>
    </>
  );
}

interface CarouselItemProps {
  id: string;
  img: string;
}
function CarouselItem(props: CarouselItemProps) {
  const handleImageMouseEnter = useMemo(
    () => (evt: React.MouseEvent) => {
      console.log("mouse enter");
      const w_device = $(window).width();
      let w = $(evt.target).width();
      let h = $(evt.target).height();
      let pos = $(evt.target).offset();
      let l = pos.left + w / 2 < 160 ? 160 : pos.left + w / 2;
      let per_max = (pos.left / w_device) * 100;
      if (per_max < 12) l = "12vw";
      if (per_max > 85) l = "88vw";
      $(".popupVideo").css({
        top: pos.top + h / 2,
        left: l,
      });
      $(".popupVideo>.detail").css({
        width: `${w * 1.5}px`,
        height: `${h * 1.5}px`,
      });
      $(".popupVideo>.detail").hide();
      $(".popupVideo>.detail").show("1000");
    },
    []
  );

  return (
    <div id={props.id} className="pointer slide-item">
      <div className="p-3">
        <img src={props.img} alt="" onMouseEnter={handleImageMouseEnter} />
      </div>
    </div>
  );
}

export default App;
