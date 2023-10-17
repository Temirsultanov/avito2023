import { Game_From_API, Game_Preview_From_API } from './types'

const API_URL_BASE = 'https://free-to-play-games-database.p.rapidapi.com/api/'
const API_OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '15f8274c11mshd3837e4d2321dd3p1902e2jsnb4af93f8aa0a',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
	},
}

const fetchData = async (url: string) => {
	const response = await fetch(url, API_OPTIONS)
	if (response.status !== 200) return null

	const result = await response.json()
	return result
}

export const fetchGames = async (): Promise<null | Game_Preview_From_API[]> => {
	const url = API_URL_BASE + 'games'
	const data = await fetchData(url)

	return data
}

export const fetchGameById = async (id: number): Promise<null | Game_From_API> => {
	const url = API_URL_BASE + 'game?id=' + id
	const data = await fetchData(url)

	return data
}
