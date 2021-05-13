import React from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation]);

export default function Hotel({data}) {
	return (
		<Swiper spaceBetween={16} slidesPerView={4} navigation>
			{data.map((hotels) => (
				<SwiperSlide key={hotels.id}>
					<figure className="guests-loves__image-wrapper__swiper-slide">
						<div className="guests-loves__image">
							<img className="guests-loves__image-photo" src={hotels.imageUrl} alt={hotels.name} />
						</div>
						<figcaption className="guests-loves__destination">
							<span className="guests-loves__hotel">{hotels.name}</span>
							<span className="guests-loves__city">{hotels.city}, {hotels.country}</span>
						</figcaption>
					</figure>
				</SwiperSlide>
			))}
		</Swiper>
	);
}
