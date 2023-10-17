import './style.scss'

interface IProps {
	children: React.ReactNode
}

export const App = ({ children }: IProps) => {
	return (
		<>
			<header className='app__header'>Header</header>
			<main className='app__main'>{children}</main>
		</>
	)
}
