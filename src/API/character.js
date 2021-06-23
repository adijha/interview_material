import axios from 'axios'

export const getInitialData = async (character) => {
	try {
		let res = await axios.get(
			`https://rickandmortyapi.com/api/character/?name=${
				character ? character : ''
			}`
		)
		console.log(res.data.results)
		return res.data.results
	} catch {
		console.log("didn't get initial data")
	}
}
