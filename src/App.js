import React from "react";
import "./App.css";
import {data} from "./constants/array"

function App() {
  return (
    <section className="guests">
      <div className="container">
        <h2 className="guests-loves__title">Homes guests loves</h2>
        <div className="guest-loves__slider-wrapper">
          <div className="guest-loves__swiper-container">
            <div className="guests-loves__image guest-loves__swiper-wrapper">
              <figure>
                <div>
                  <img
                    className="guests-loves__image-photo"
                    src={data.imageUrl}
                    alt={data.country}
                  />
                </div>
                <figcaption className="guests-loves__destination">
                  <span className="guests-loves__hotel">{data.name}</span>
                  <span className="guests-loves__city">{data.city}</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
