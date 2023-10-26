import { Link } from 'react-router-dom'
import './style.scss'

interface IProps {
	className?: string
	title: string
}

export const Breadcrumbs = ({ className = '', title }: IProps) => {
	return (
		<p className={'gameBreadcrumbs ' + className}>
			<Link to='/games/'>Список игр</Link> &gt; <span>{title}</span>
		</p>
	)
}
