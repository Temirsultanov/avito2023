import { Game, Game_From_API, Game_Preview, Game_Preview_From_API } from './types'

export const transformGameFromAPIViewToAppView = (gameFromAPI: Game_From_API): Game => {
	return {
		id: gameFromAPI.id,
		title: gameFromAPI.title,
		releaseDate: gameFromAPI.release_date,
		publisher: gameFromAPI.publisher,
		genre: gameFromAPI.genre,
		thumbnail: gameFromAPI.thumbnail,
		developer: gameFromAPI.developer,
		screenshots: gameFromAPI.screenshots,
		minSystemRequirements: gameFromAPI.mininum_system_requirements,
	}
}

// prettier-ignore
export const transformGamePreviewsFromAPIViewToAppView = (gamePreviewsFromAPI: Game_Preview_From_API[]): Game_Preview[] => {
	return gamePreviewsFromAPI.map(gamePreviewFromAPI => ({
		id: gamePreviewFromAPI.id,
		title: gamePreviewFromAPI.title,
		releaseDate: gamePreviewFromAPI.release_date,
		publisher: gamePreviewFromAPI.publisher,
		genre: gamePreviewFromAPI.genre,
		thumbnail: gamePreviewFromAPI.thumbnail,
	}))
}
