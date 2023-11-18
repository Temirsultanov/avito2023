import { Link, useParams } from 'react-router-dom'

import { Game } from './Game'
import { useGetGameQuery } from '../../store/apiSlice'

import './style.scss'

export const GamePage: React.FC = () => {
	const { gameId: gameIdString } = useParams()
	const gameId = Number(gameIdString)

	const result = useGetGameQuery(gameId)

	let content
	if (result.isFetching) content = <Loading />
	else if (result.data) content = <Game className='gamePage__content' game={result.data} />
	else content = <Error />

	return <section className='gamePage'>{content}</section>
}

const Error = () => {
	return (
		<div className='gamePage__invalid'>
			<h1>Упс: что-то пошло не так...</h1>
			<Link to='/games'>К списку игр</Link>
		</div>
	)
}

const Loading = () => {
	return (
		<div className='gamePage__loading'>
			<p>Загрузка...</p>
		</div>
	)
}
