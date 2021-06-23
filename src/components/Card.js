import React from 'react'
import './card.css'
function Card({ name, image }) {
	return (
		<div className="card">
			<h5 className="name">{name}</h5>
			<img className="img" src={image} alt={name} />
		</div>
	)
}

export default Card
