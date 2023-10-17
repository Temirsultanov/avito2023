import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { fetchGameById, getGame, getGameStatus } from '../../store/gameSlice'
import { useAppDispatch } from '../../store'
import './style.scss'

export const Game: React.FC = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const { gameId } = useParams()
	const game = useSelector(getGame)
	const gameStatus = useSelector(getGameStatus)

	useEffect(() => {
		if (gameStatus === 'idle') dispatch(fetchGameById(Number(gameId)))
		else if (gameStatus === 'success' && game === null) {
			navigate('/games')
		}
	}, [dispatch, navigate, gameId, game, gameStatus])

	if (game === null) return null

	return (
		<section>
			<h1>{game.title}</h1>
			<p>Разработчик: {game.developer}</p>
			<img src={game.thumbnail} alt='' />
		</section>
	)
}
