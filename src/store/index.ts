import { useDispatch } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import gameReducer, { Slice_State as Game_Slice_State } from './gameSlice'
import gamesReducer, { Slice_State as Games_Slice_State } from './gamesSlice'

export interface IStore {
	game: Game_Slice_State
	games: Games_Slice_State
}

export const store = configureStore({
	reducer: {
		game: gameReducer,
		games: gamesReducer,
	},
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
