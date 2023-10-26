import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider as StoreProvider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { ConfigProvider } from 'antd'

import { theme } from './lib/theme'
import { store } from './store'
import { createRouter } from './router'
import { App } from './components/App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ConfigProvider theme={theme}>
			<StoreProvider store={store}>
				<RouterProvider router={createRouter(App)} />
			</StoreProvider>
		</ConfigProvider>
	</React.StrictMode>,
)
