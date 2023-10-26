import './style.scss'

interface IProps {
	term: string
	definition: string
}

export const InfoGroup = ({ term, definition }: IProps) => {
	return (
		<>
			<p className='infoGroup__term'>{term}</p>
			<p className='infoGroup__definition'>{definition}</p>
		</>
	)
}
