export type Game_Preview = {
	id: number
	title: string
	releaseDate: string
	publisher: string
	genre: string
	thumbnail: string
}

export type Game = Game_Preview & {
	developer: string
	screenshots: Screenshot[]
	minSystemRequirements: Min_System_Requirements
}

export type Screenshot = {
	id: number
	image: string
}

export type Min_System_Requirements = {
	graphics: string
	memory: string
	os: string
	processor: string
	storage: string
}

export type Sorting_Type = 'relevance' | 'alphabetical' | 'release-date' | 'popularity'
export type Sortings = {
	[index in Sorting_Type]: string
}

export type Platform_Type = 'all' | 'pc' | 'browser'
export type Platforms = {
	[index in Platform_Type]: string
}

//prettier-ignore
export type Category_Type = 'mmorpg' | 'shooter' | 'moba' | 'anime' | 'battle-royale' | 'strategy' | 'fantasy' | 'sci-fi' | 'card' | 'racing' | 'fighting' | 'social' | 'sports'
export type Categories = {
	[index in Category_Type]: string
}

// prettier-ignore
export type Tag_Type = 'sandbox'| 'open-world'| 'survival'| 'pvp'| 'pve'| 'pixel'| 'voxel'| 'zombie'| 'turn-based'| 'first-person'| 'third-Person'| 'top-down'| 'tank'| 'space'| 'sailing'| 'side-scroller'| 'superhero'| 'permadeath' | 'mmo'| 'mmofps'| 'mmotps'| '3d'| '2d' | 'action-rpg'| 'action'| 'military'| 'martial-arts'| 'flight'| 'low-spec'| 'tower-defense'| 'horror'| 'mmorts'
export type Tags = {
	[index in Tag_Type]: string
}
