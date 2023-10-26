import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'

import { Aside } from './Aside'
import { List } from './List'

import { fetchGames, getGames, getGamesStatus } from '../../store/gamesSlice'
import { useAppDispatch } from '../../store'
import './style.scss'
import { useSearchParams } from 'react-router-dom'

export const GameList: React.FC = () => {
	const dispatch = useAppDispatch()
	const [searchParams] = useSearchParams()

	const sorting = searchParams.get('sort-by') || 'relevance'
	const platform = searchParams.get('platform') || 'all'
	const tag = searchParams.get('tag') || ''

	const games = useSelector(getGames)
	const gamesStatus = useSelector(getGamesStatus)
	const abort = useRef<null | (() => void)>(null)

	useEffect(() => {
		abort.current = dispatch(fetchGames({ sorting, platform, tag })).abort
	}, [dispatch, sorting, platform, tag])

	useEffect(() => {
		return () => {
			abort.current?.()
		}
	})

	let content
	if (games !== null) content = <List games={games} className='gameList__list' />
	else if (gamesStatus === 'loading' || gamesStatus === 'idle') content = <Loading />
	else content = <InvalidRoute />

	return (
		<section className='gameList'>
			<h1 className='gameList__title'>Бесплатные игры</h1>
			<div className='gameList__content'>
				<Aside className='gameList__aside' />
				{content}
			</div>
		</section>
	)
}

const InvalidRoute = () => {
	return (
		<div className='gameList__invalid'>
			<h1>Упс: что-то пошло не так...</h1>
			<p>Не получилось запросить игры</p>
		</div>
	)
}

const Loading = () => {
	return (
		<div className='gameList__loading'>
			<p>Загрузка...</p>
		</div>
	)
}
