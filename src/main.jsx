import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="116271875970-sbc7aiefbuvpi762gt2lveuvc4544hmu.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>,
)
