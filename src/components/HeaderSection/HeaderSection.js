import React, { Component } from 'react';

import Container from '../Container/Container';
import Section from '../Section/Section';
import Title from '../Title/Title';
import Hotel from '../Hotel/Hotel';

import './HeaderSection.css';

import dataHotel from '../../constants/array';

import appleStore from './apple-store.svg';
import googlePlay from './google-play.svg';
import logoVector from './logo_vector.svg';
import sprite from './sprite.svg';

export default class HeaderSection extends Component {

	constructor(props) {
		super(props);
		this.state = {
			searchHotel: '',
			searchResult: [],
			count: 0,
		};
	}

	handleSearchHotel = (event) => {
		this.setState({ searchHotel: event.target.value });
	}

	handleSearchResult = (event) => {
		event.preventDefault();
		const { searchHotel, count } = this.state;
		if (searchHotel.length === 0) {
			alert('Enter search data, please');
			return;
		}

		const text = new RegExp(`.*${searchHotel}+.*`, 'gim');
		const result = [];
		dataHotel.forEach((currentHotel) => {
			const tempValue = currentHotel.country + currentHotel.city + currentHotel.name;
			if (!(tempValue.search(text))) {
				result.push(currentHotel);
			}
		});

		this.setState({ searchResult: result });
		this.setState({ count: count + 1 });
	}

	render() {
		const { searchResult, count } = this.state;
		const header = (
			<header>
				<Container>
					<div className="header">
						<div className="header-head__logo">
							<img src={logoVector} alt="Triphouse" className="header-head__logo-pc" />
						</div>
						<div className="header-menu">
							<nav>
								<div className="header-menu-navigation">
									<a href="#" className="header-menu-navigation__link">Stays</a>
									<a href="#" className="header-menu-navigation__link">Attractions</a>
								</div>
							</nav>
							<div className="header-img-btn">
								<svg className="header-img-btn__night">
									<use xlinkHref={sprite + '#night'} />
								</svg>
								<svg className="header-img-btn__account">
									<use xlinkHref={sprite + '#accountcircle'} />
								</svg>
							</div>
						</div>
					</div>
					<div className="header-titles">
						<h1 className="header-titles__title">
						Discover stays
							<br />
						to live, work or just relax
						</h1>
					</div>
					<form className="header-form">
						<div className="header-form__input">
							<div className="header-form__input-form col-5">
								<input type="text" id="destination" name="search" required autoComplete="off" onChange={this.handleSearchHotel} />
								<label htmlFor="destination" className="destination">Your destination or hotel name</label>
							</div>
							<div className="header-form__input-form col-2">
								<input type="text" id="date" required name="date" autoComplete="off" />
								<label htmlFor="date" className="date">Check-in — Check-out</label>
							</div>
							<div className="header-form__input-form col-1" id="header-form__input-form-people">
								<input type="text" id="people" required name="people" autoComplete="off" />
								<label htmlFor="people" className="people" id="label_people">Adults - Children - Room</label>
							</div>
							<div className="header-form-drop" id="header-form-drop" />
							<div className="header-form__input-form col-2">
								<input type="submit" value="Search" onClick={this.handleSearchResult} />
							</div>
						</div>
					</form>
					<div className="store">
						<div><a href="#"><img src={googlePlay} alt="google-play" /></a></div>
						<div><a href="#"><img src={appleStore} alt="apple-store" /></a></div>
					</div>
				</Container>
			</header>
		);
		if (count === 0) {
  			return (
  				<>
  					{header}
  				</>
  			);
  		} else if (count > 0 && searchResult.length === 0) {
  			return (
  				<>
  					{ header }
  						<Section>
  							<Container>
  								<Title text="Available Hotels" />
  								<div className="not-found">Not valid data for search, repeat please</div>
  							</Container>
  						</Section>
  				</>
  			);
  		} else if (count > 0 && searchResult.length > 0) {
  			return (
  				<>
  					{ header }
  						<Section>
  							<Container>
  								<Title text="Available Hotels" />
  								<Hotel data={searchResult} />
  							</Container>
  						</Section>
  				</>
  			);
  		}
	}
}
