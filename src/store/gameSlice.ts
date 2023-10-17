import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchGameById as fetchGameByIdFromServer } from '../lib/api'
import { transformGameFromAPIViewToAppView } from '../lib/helpers'
import { Game } from '../lib/types'
import { IStore } from './index'

export type Slice_State = {
	data: null | Game
	status: 'idle' | 'loading' | 'rejected' | 'success'
	error: boolean
}

const initialState: Slice_State = {
	data: null,
	status: 'idle',
	error: false,
}

export const fetchGameById = createAsyncThunk('game/fetchGame', async (id: number) => {
	const response = await fetchGameByIdFromServer(id)
	return response === null ? null : transformGameFromAPIViewToAppView(response)
})

export const gameSlice = createSlice({
	name: 'game',
	initialState,
	reducers: {
		clear: (state) => {
			state.data = null
			state.status = 'idle'
			state.error = false
		},
	},
	extraReducers(builder) {
		builder.addCase(fetchGameById.fulfilled, (state, action) => {
			state.data = action.payload
			state.status = 'success'
		})
	},
})

export const getGame = (state: IStore) => state.game.data
export const getGameStatus = (state: IStore) => state.game.status

export const { clear } = gameSlice.actions
export default gameSlice.reducer
