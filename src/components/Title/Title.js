import React from 'react';

export default function Title({ text, className }) {
	return (
		<h2 className={className}>
			{text}
		</h2>
	);
}
