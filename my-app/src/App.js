import React, { useState } from "react";
import Madrid from "./images/Madrid.jpg";
import London from "./images/London.jpg";

function App() {
  let content;

  let [city, changeContent] = useState(false);

  if (city) {
    content = (
      <div className="city__Madrid">
        <img
          className="city__img"
          src={Madrid}
          width="300px"
          height="200px"  
          alt="Madrid"
        />
        <p className="city__info">
          <b>Madrid </b> is the capital and most populous city of Spain. The
          city has almost 3.4 million inhabitants and a metropolitan area
          population of approximately 6.7 million. It is the second-largest city
          in the European Union (EU), surpassed only by Berlin in its
          administrative limits, and its metropolitan area is the second-largest
          in the EU, surpassed only by Paris. The municipality covers 604.3 km2
          (233.3 sq mi) geographical area.
        </p>
      </div>
    );
  } else {
    content = (
      <div className="city__London">
        <img
          className="city__img"
          src={London}
          width="300px"
          height="200px"
          alt="London"
        />
        <p className="city__info">
          <b>London</b> is the capital and largest city of England and the
          United Kingdom. Standing on the River Thames in south-east England at
          the head of a 50-mile (80 km) estuary down to the North Sea, it has
          been a major settlement for two millennia. The City of London, its
          ancient core and financial centre, was founded by the Romans as
          Londinium and retains boundaries close to its medieval ones.
        </p>
      </div>
    );
  }
  return (
    <div>
      <button onClick={() => changeContent(!city)}>Click me</button>
      {content}
    </div>
  );
}

export default App;
