import "@atomico/react/proxy";
import reactLogo from "./assets/react.svg";
import { KeenSlider } from "@atomico/keen-slider/react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <KeenSlider
        loop
        drag
        autoplay
        slidesPerView="1, 3 520px"
        slidesSpacing="15"
      >
        <div slot="slide" className="slide">
          <img src={reactLogo} />
        </div>
        <div slot="slide" className="slide">
          <h1>2</h1>
        </div>
        <div slot="slide" className="slide">
          <h1>3</h1>
        </div>
        <div slot="slide" className="slide">
          <h1>4</h1>
        </div>
        <button className="button" slot="to-left">
          ←
        </button>
        <button className="button" slot="to-right">
          →
        </button>
        <button className="dot" slot="pagination"></button>
      </KeenSlider>
    </div>
  );
}

export default App;
