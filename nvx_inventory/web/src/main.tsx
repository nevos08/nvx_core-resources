import React from 'react'
import ReactDOM from 'react-dom/client'
import { MantineProvider } from '@mantine/core'

import App from './App.tsx'
import './styles/index.css'
import LocalesContextProvider from './context/LocalesContext.tsx'

// Icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
      <LocalesContextProvider>
        <App />
      </LocalesContextProvider>
    </MantineProvider>
  </React.StrictMode>
)
