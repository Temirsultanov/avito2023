import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchGameById as fetchGameByIdFromServer } from '../lib/api'
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

export const fetchGameById = createAsyncThunk('game/fetchGame', async (id: number, thunkAPI) => {
	const response = await fetchGameByIdFromServer(id, thunkAPI.signal)
	if (response === null) throw new Error('Ошибка: ')

	return response
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
		builder
			.addCase(fetchGameById.pending, (state) => {
				state.status = 'loading'
			})
			.addCase(fetchGameById.fulfilled, (state, action) => {
				state.status = action.payload === null ? 'rejected' : 'success'
				state.error = action.payload === null
				state.data = action.payload
			})
			.addCase(fetchGameById.rejected, (state, action) => {
				if (action.meta.aborted) {
					state.data = null
					state.status = 'idle'
					state.error = false
				} else {
					state.error = true
					state.status = 'rejected'
				}
			})
	},
})

export const getGame = (state: IStore) => state.game.data
export const getGameStatus = (state: IStore) => state.game.status

export const { clear } = gameSlice.actions
export default gameSlice.reducer
