import React from 'react';
import Container from '../Container/Container';

import './HeaderSection.css';

import appleStore from './apple-store.svg';
import googlePlay from './google-play.svg';
import logoVector from './logo_vector.svg';
import sprite from './sprite.svg';

export default function HeaderSection () {
	return(
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
  							<input type="text" id="destination" name="search" required />
  							<label htmlFor="destination" className="destination">Your destination or hotel name</label>
  						</div>
  						<div className="header-form__input-form col-2">
  							<input type="text" id="date" required />
  							<label htmlFor="date" className="date">Check-in — Check-out</label>
  						</div>
  						<div className="header-form__input-form col-1" id="header-form__input-form-people">
  							<input type="text" id="people" required />
  							<label htmlFor="people" className="people" id="label_people">Adults - Children - Room</label>
  						</div>
  						<div className="heder-form-drop" id="heder-form-drop" />
  						<div className="header-form__input-form col-2">
  							<input type="submit" value="Search" />
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
}
