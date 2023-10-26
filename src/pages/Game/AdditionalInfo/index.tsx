import { InfoGroup } from '../InfoGroup'
import './style.scss'

interface IProps {
	className?: string
	developer: string
	releaseDate: string
	genre: string
	publisher: string
}

export const AdditionalInfo = ({ className = '', developer, releaseDate, genre, publisher }: IProps) => {
	return (
		<ul className={'gameAdditionalInfo ' + className}>
			<li>
				<InfoGroup term='Разработчик' definition={developer} />
			</li>
			<li>
				<InfoGroup term='Дата релиза' definition={releaseDate} />
			</li>
			<li>
				<InfoGroup term='Жанр' definition={genre} />
			</li>
			<li>
				<InfoGroup term='Издатель' definition={publisher} />
			</li>
		</ul>
	)
}
