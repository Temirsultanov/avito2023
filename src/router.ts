import { createBrowserRouter } from 'react-router-dom'
import { GameList } from './pages/GameList'
import { Game } from './pages/Game'

export const router = createBrowserRouter([
	{
		path: '/',
		element: GameList(),
	},
	{
		path: '/games/:gameId',
		element: Game(),
	},
])
