import React from "react";
import "./App.css";
import Hotel from './hotels';
import { data } from "./constants/array";

function App() {
  return (
    <section className="guests">
      <div className="container">
        <h2 className="guests-loves__title">Homes guests loves</h2>
        <div className="guest-loves__slider-wrapper">
          <div className="guest-loves__swiper-container">
            <div className="guests-loves__image guest-loves__swiper-wrapper">
              {data.map((hotels) => (
                <Hotel key={hotels.id} hotels={hotels} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
