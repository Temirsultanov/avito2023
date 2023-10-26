import { Link } from 'react-router-dom'
import { Game_Preview } from '../../../lib/types'
import './style.scss'

interface IProps {
	gamePreview: Game_Preview
}

export const GamePreview = ({ gamePreview }: IProps) => {
	return (
		<Link to={'/games/' + gamePreview.id} className='gamePreview'>
			<img className='gamePreview__thumbnail' src={gamePreview.thumbnail} alt={gamePreview.genre} />
			<div className='gamePreview__content'>
				<p className='gamePreview__genre'>{gamePreview.genre}</p>
				<h2 className='gamePreview__title'>{gamePreview.title}</h2>
				<p className='gamePreview__publisher'>{gamePreview.publisher}</p>
				<p className='gamePreview__releaseDate'>{gamePreview.releaseDate}</p>
			</div>
		</Link>
	)
}
