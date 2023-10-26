import { GamePreview } from '../GamePreview'
import { Game_Preview } from '../../../lib/types'

interface IProps {
	className?: string
	games: Game_Preview[]
}

export const List = ({ className = '', games }: IProps) => {
	return (
		<ul className={className}>
			{games.map((game) => (
				<li key={game.id}>
					<GamePreview gamePreview={game} />
				</li>
			))}
		</ul>
	)
}
