import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { GamesPage } from './pages/GamesPage'
import { GamePage } from './pages/GamePage'

export const createRouter = (WrapElement: React.ElementType) => {
	return createBrowserRouter([
		{
			element: <WrapElement />,
			children: [
				{
					path: '/',
					element: <GamesPage />,
				},
				{
					path: '/games',
					element: <GamesPage />,
				},
				{
					path: '/games/:gameId',
					element: <GamePage />,
				},
			],
		},
	])
}
