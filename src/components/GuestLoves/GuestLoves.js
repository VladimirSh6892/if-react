import React from 'react';

import Section from '../Section/Section';
import Container from '../Container/Container';
import Title from '../Title/Title';
import Hotel from '../Hotel/Hotel';

import dataHotel from '../../constants/array';

export default function GuestLoves() {
	return (
		<Section>
			<Container>
				<Title className="guests-loves__title" text="Homes guests loves" />
				<div className="guest-loves__slider-wrapper">
					<div className="guest-loves__swiper-container">
						<div className="guests-loves__image__swiper-wrapper">
							<Hotel data={dataHotel} />
						</div>
					</div>
				</div>
			</Container>
		</Section>
	);
}
