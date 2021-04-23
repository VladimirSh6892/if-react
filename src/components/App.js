import React from 'react';
import './App.css';
import './global.css';
import './guestLoves.css';
import Hotel from './Hotel';

function App() {
	return (
		<section className="guests">
			<div className="container">
				<h2 className="guests-loves__title">Homes guests loves</h2>
				<div className="guest-loves__slider-wrapper">
					<div className="guest-loves__swiper-container">
						<div className="guests-loves__image__swiper-wrapper">
							<Hotel />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default App;
