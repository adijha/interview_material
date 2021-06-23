/**
 *
 * Listing page - Lists the character cards
 */
import _ from 'lodash'
import React, { useState, useEffect } from 'react'
import './styles.css'
import { getInitialData } from './API/character'
import Card from './components/Card'

export default function App() {
	const [name, setName] = useState('')
	const [characters, setCharacters] = useState([])

	const callApi = async (name) => {
		let data = await getInitialData(name)

		setCharacters(data)
	}

	var debounce_fun = _.debounce(function (input) {
		callApi(input)
	}, 1000)

	useEffect(() => {
		callApi()
	}, [])

	return (
		<>
			<input
				type="text"
				onChange={(e) => {
					debounce_fun(e.target.value)
					// callApi(e.target.value)

					// setName(e.target.value)
					// setName(e.target.value)
				}}
			/>
			<div className="card-list">
				{characters &&
					characters.map((character) => (
						<Card
							key={character.id}
							name={character.name}
							image={character.image}
						/>
					))}
			</div>
		</>
	)
}
