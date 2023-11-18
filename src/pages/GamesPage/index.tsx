import { useSearchParams } from 'react-router-dom'
import { Aside } from './Aside'
import { Games } from './Games'

import { useGetGamesQuery } from '../../store/apiSlice'
import './style.scss'

export const GamesPage: React.FC = () => {
	const [searchParams] = useSearchParams()
	const sorting = searchParams.get('sort-by') || 'relevance'
	const platform = searchParams.get('platform') || 'all'
	const tag = searchParams.get('tag') || ''

	const result = useGetGamesQuery({ sorting, platform, tag })

	let content
	if (result.isFetching) content = <Loading />
	else if (result.data) content = <Games games={result.data} className='gamesPage__list' />
	else content = <InvalidRoute />

	return (
		<section className='gamesPage'>
			<h1 className='gamesPage__title'>Бесплатные игры</h1>
			<div className='gamesPage__content'>
				<Aside className='gamesPage__aside' />
				{content}
			</div>
		</section>
	)
}

const InvalidRoute = () => {
	return (
		<div className='gamesPage__invalid'>
			<h1>Упс: что-то пошло не так...</h1>
			<p>Не получилось запросить игры</p>
		</div>
	)
}

const Loading = () => {
	return (
		<div className='gamesPage__loading'>
			<p>Загрузка...</p>
		</div>
	)
}
