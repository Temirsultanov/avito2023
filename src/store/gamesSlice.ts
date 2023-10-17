import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchGames as fetchGamesFromServer } from '../lib/api'
import { transformGamePreviewsFromAPIViewToAppView } from '../lib/helpers'
import { Game_Preview } from '../lib/types'
import { IStore } from './index'

export type Slice_State = {
	data: null | Game_Preview[]
	status: 'idle' | 'loading' | 'rejected' | 'success'
	error: boolean
}

const initialState: Slice_State = {
	data: null,
	status: 'idle',
	error: false,
}

export const fetchGames = createAsyncThunk('games/fetchGames', async () => {
	const response = await fetchGamesFromServer()
	return response === null ? null : transformGamePreviewsFromAPIViewToAppView(response)
})

export const gamesSlice = createSlice({
	name: 'games',
	initialState,
	reducers: {
		clear: (state) => {
			state.data = null
			state.status = 'idle'
			state.error = false
		},
	},
	extraReducers(builder) {
		builder.addCase(fetchGames.fulfilled, (state, action) => {
			state.data = action.payload
			state.status = 'success'
		})
	},
})

export const getGames = (state: IStore) => state.games.data
export const getGamesStatus = (state: IStore) => state.games.status

export const { clear } = gamesSlice.actions
export default gamesSlice.reducer
