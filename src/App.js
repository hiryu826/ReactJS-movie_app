import React from "react";

// function Food(props) {
//   return <h1>Hi {props.fav}</h1>;
// }

function Food({ fav }) {
  return <h5>Try {fav}</h5>;
}

function App() {
  return (
    <div>
      <h1>hello</h1>
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="samgiopsal" />
      <Food fav="chukumi" />
    </div>
  );
}

export default App;
