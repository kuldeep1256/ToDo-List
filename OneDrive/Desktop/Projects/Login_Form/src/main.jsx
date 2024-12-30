import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
    domain="dev-toz80n8zf65tkogs.us.auth0.com"
    clientId="8wrPzLDM7yWr6slyUxmVEimgABF8N2m2"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
    <App />
    </Auth0Provider>
  </StrictMode>,
)
