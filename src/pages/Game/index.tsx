import { useEffect, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Content } from './Content'
import { getGameStatus, clear as clearGame, getGame, fetchGameById } from '../../store/gameSlice'
import { useAppDispatch } from '../../store'

import './style.scss'

export const Game: React.FC = () => {
	const dispatch = useAppDispatch()

	const { gameId: gameIdString } = useParams()
	const gameId = Number(gameIdString)

	const game = useSelector(getGame)
	const gameStatus = useSelector(getGameStatus)
	const abort = useRef<null | (() => void)>(null)

	useEffect(() => {
		abort.current = dispatch(fetchGameById(gameId)).abort

		return () => {
			dispatch(clearGame())
			abort.current?.()
		}
	}, [dispatch, gameId])

	let content
	if (game !== null) content = <Content className='game__content' game={game} />
	else if (gameStatus === 'loading' || gameStatus === 'idle') content = <Loading />
	else content = <InvalidRoute />

	return <section className='game'>{content}</section>
}

const InvalidRoute = () => {
	return (
		<div className='game__invalid'>
			<h1>Упс: что-то пошло не так...</h1>
			<Link to='/games'>К списку игр</Link>
		</div>
	)
}

const Loading = () => {
	return (
		<div className='game__loading'>
			<p>Загрузка...</p>
		</div>
	)
}
