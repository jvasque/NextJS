import React from "react";

function about() {
  return (
    <div>
      <p>Hola soy el about</p>
      <img src="/fine.jpg" alt="logo" />
      <style global>
        {`
          body{
              background:lightblue;
          }
          `}
      </style>
    </div>
  );
}

export default about;
