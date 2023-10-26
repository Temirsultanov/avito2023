import { useSearchParams } from 'react-router-dom'
import { Select } from 'antd'

import { transformToSearchParams, transformToValueLabel } from '../../../lib/helpers'
import { SORTINGS, PLATFORMS, CATEGORIES, TAGS } from '../../../lib/constants'

import './style.scss'

interface IProps {
	className?: string
}

export const Aside = ({ className = '' }: IProps) => {
	const [searchParams, setURLSearchParams] = useSearchParams()

	const selectedSorting = searchParams.get('sort-by') || 'relevance'
	const selectedPlatform = searchParams.get('platform') || 'all'

	const tagsFromQueryParam = searchParams.get('tag')
	const selectedTags = tagsFromQueryParam ? tagsFromQueryParam.split('.') : []

	return (
		<aside className={'filterGames ' + className}>
			<form className='filterGames__form'>
				<label className='filterGames__label' htmlFor='games-sort'>
					Сортировка
				</label>
				<Select
					value={selectedSorting}
					onChange={(value) => setURLSearchParams(transformToSearchParams(value, selectedPlatform, selectedTags))}
					defaultValue={SORTINGS.relevance}
					id='games-sort'
					className='filterGames__select'
					options={transformToValueLabel(SORTINGS)}
				/>
				<label className='filterGames__label' htmlFor='games-platform'>
					Платформа
				</label>
				<Select
					value={selectedPlatform}
					onChange={(value) => setURLSearchParams(transformToSearchParams(selectedSorting, value, selectedTags))}
					defaultValue={PLATFORMS.all}
					id='games-platform'
					className='filterGames__select'
					options={transformToValueLabel(PLATFORMS)}
				/>
				<label className='filterGames__label' htmlFor='games-tag'>
					Категория / Тэг
				</label>
				<Select
					value={selectedTags}
					onChange={(value) => setURLSearchParams(transformToSearchParams(selectedSorting, selectedPlatform, value))}
					id='games-tag'
					className='filterGames__select'
					placeholder='Выбрать'
					mode='multiple'
					allowClear={true}
					options={[
						{
							label: 'Категория',
							options: transformToValueLabel(CATEGORIES),
						},
						{
							label: 'Тэг',
							options: transformToValueLabel(TAGS),
						},
					]}
				/>
			</form>
			<button className='filterGames__resetButton' onClick={() => setURLSearchParams()}>
				Сбросить фильтры
			</button>
		</aside>
	)
}
