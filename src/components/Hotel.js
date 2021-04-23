import React from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { data } from '../constants/array';
import './Hotel.css';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation]);

export default function Hotel() {
	return (
		<Swiper spaceBetween={16} slidesPerView={4} navigation>
			{data.map((hotels) => (
				<SwiperSlide key={hotels.id}>
					<figure className="guests-loves__image-wrapper__swiper-slide">
						<div className="guests-loves__image">
							<img className="guests-loves__image-photo" src={hotels.imageUrl} alt={hotels.country} />
						</div>
						<figcaption className="guests-loves__destination">
							<span className="guests-loves__hotel">{hotels.name}</span>
							<span className="guests-loves__city">{hotels.city}</span>
						</figcaption>
					</figure>
				</SwiperSlide>
			))}
		</Swiper>
	);
}
