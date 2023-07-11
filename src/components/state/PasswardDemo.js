import React, { useState } from "react";

export default function PasswardDemo() {
  const [Pass, setPass] = useState(true);
  const toggle = function () {
    setPass(!Pass);
  };
  return (
    <div>
      <input type={Pass ? "password" : "text"} />
      <button onClick={toggle}>
        {Pass ? "Show password" : "Hide password"}
      </button>
    </div>
  );
}
