import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Provider as StoreProvider } from 'react-redux'

import { App } from './components/App'
import { router } from './router'
import { store } from './store'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<StoreProvider store={store}>
			<App>
				<RouterProvider router={router} />
			</App>
		</StoreProvider>
	</React.StrictMode>,
)
