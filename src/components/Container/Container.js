import React from 'react';

export default function Conteiner(props) {
	const parametr = props;
	return (
		<div className="container">
			{parametr.children}
		</div>
	);
}
