import { Game, Game_Preview } from './types'

const API_URL_BASE = 'http://127.0.0.1:8000/'

const fetchData = async (url: string, signal: AbortSignal | undefined) => {
	const response = await fetch(url, {
		method: 'GET',
		signal,
	})

	if (response.status !== 200) return null

	const result = await response.json()
	return result
}

export const fetchGames = async (
	sorting: string,
	platform: string,
	tag: string,
	signal: AbortSignal,
): Promise<null | Game_Preview[]> => {
	const url = API_URL_BASE + `games?sort-by=${sorting}&platform=${platform}&tag=${tag}`
	const data = await fetchData(url, signal)

	return data
}

export const fetchGameById = async (id: number, signal: AbortSignal): Promise<null | Game> => {
	const url = API_URL_BASE + 'game?id=' + id
	const data = await fetchData(url, signal)

	return data
}
