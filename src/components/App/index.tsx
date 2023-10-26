import { Outlet, Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import './style.scss'

export const App = () => {
	return (
		<>
			<header className='app__header'>
				<Link to='/'>
					<img className='logo' src={Logo} alt='' />
				</Link>
			</header>
			<main className='app__main'>
				<Outlet />
			</main>
		</>
	)
}
