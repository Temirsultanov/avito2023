import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

const BASE_URL = 'http://127.0.0.1:8000'
const ROUTES = {
	games: '/games',
	game: '/game',
}

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: retry(fetchBaseQuery(), { maxRetries: 2 }),
	endpoints: (builder) => ({
		getGames: builder.query({
			query: ({ sorting, platform, tag }) =>
				BASE_URL + ROUTES.games + `?sort-by=${sorting}&platform=${platform}&tag=${tag}`,
		}),
		getGame: builder.query({
			query: (id) => BASE_URL + ROUTES.game + '?id=' + id,
			keepUnusedDataFor: 300,
		}),
	}),
})

export const { useGetGamesQuery, useGetGameQuery } = apiSlice
