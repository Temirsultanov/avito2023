import { Backdrop } from '../Backdrop'
import { ThumbnailAndPlayLink } from '../ThumbnailAndPlayLink'
import { Breadcrumbs } from '../Breadcrumbs'
import { AdditionalInfo } from '../AdditionalInfo'
import { Screenshots } from '../Screenshots'
import { SystemRequirements } from '../SystemRequirements'

import { Game } from '../../../lib/types'
import './style.scss'

interface IProps {
	className: string
	game: Game
}

export const Content = ({ className, game }: IProps) => {
	return (
		<div className={'gameContent ' + className}>
			<div className='gameContent__backgroundImage'>
				<img src={game.thumbnail} alt={game.title} />
			</div>
			<Backdrop />
			<div className='gameContent__container'>
				<ThumbnailAndPlayLink
					className='game__fixed'
					thumbnailSrc={game.thumbnail}
					title={game.title}
					linkHref='https://www.freetogame.com/'
				/>
				<div className='game__static'>
					<Breadcrumbs className='game__breadcrumbs' title={game.title} />
					<h1 className='game__title'>{game.title}</h1>
					<AdditionalInfo
						className='game__additional'
						developer={game.developer}
						publisher={game.publisher}
						releaseDate={game.releaseDate}
						genre={game.genre}
					/>
					<hr className='game__divider' />
					{game.screenshots.length > 0 && (
						<>
							<h2>Скриншоты с игры</h2>
							<Screenshots screenshots={game.screenshots} title={game.title} />
							<hr className='game__divider' />
						</>
					)}
					{game.minSystemRequirements && (
						<>
							<h2>Системные требования</h2>
							<SystemRequirements
								className='game__systemRequirements'
								minSystemRequirements={game.minSystemRequirements}
							/>
						</>
					)}
				</div>
			</div>
		</div>
	)
}
