import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { fetchGames, getGames, getGamesStatus } from '../../store/gamesSlice'
import { useAppDispatch } from '../../store'
import './style.scss'

export const GameList: React.FC = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const games = useSelector(getGames)
	const gamesStatus = useSelector(getGamesStatus)

	useEffect(() => {
		if (gamesStatus === 'idle') dispatch(fetchGames())
		else if (gamesStatus === 'success' && games === null) {
			navigate('/games')
		}
	}, [dispatch, navigate, games, gamesStatus])

	if (games === null) return null

	return (
		<section>
			<ul>
				{games.map((game) => (
					<li key={game.id}>{game.title}</li>
				))}
			</ul>
		</section>
	)
}
