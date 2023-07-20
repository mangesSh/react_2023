//Event Bubbling - when click on div 3 it will trigre all three div3,div2,div1 if you want it in riverse onclickCapture is method  if you want only envok div 3 use ev.stopPropagation();

import React from "react";

export default function EventDemo3() {
  return (
    <>
      <div onClick={() => console.log("Div-1 Clicked")} className="border">
        Div-1
        <div onClick={() => console.log("Div-2 Clicked")} className="border">
          Div-2
          <div
            onClick={(ev) => {
              console.log("Div-3 Clicked");
              ev.stopPropagation();
            }}
            className="border"
          >
            Div-3
          </div>
        </div>
      </div>
    </>
  );
}