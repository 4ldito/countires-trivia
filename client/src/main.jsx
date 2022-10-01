import React from 'react'
import ReactDOM from 'react-dom/client'
import axios from 'axios'
import { Auth0Provider } from '@auth0/auth0-react'
import App from './components/App/App'
import './index.css'

const auth0 = {
  domain: import.meta.env.VITE_AUTH0_DOMAIN,
  clientId: import.meta.env.VITE_AUTH0_CLIENT_ID
}

const baseURL = import.meta.env.VITE_BASE_URL

axios.defaults.baseURL = baseURL

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain={auth0.domain}
    clientId={auth0.clientId}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
)
