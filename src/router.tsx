import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { GameList } from './pages/GameList'
import { Game } from './pages/Game'

export const createRouter = (WrapElement: React.ElementType) => {
	return createBrowserRouter([
		{
			element: <WrapElement />,
			children: [
				{
					path: '/',
					element: <GameList />,
				},
				{
					path: '/games',
					element: <GameList />,
				},
				{
					path: '/games/:gameId',
					element: <Game />,
				},
			],
		},
	])
}
