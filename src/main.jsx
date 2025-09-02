import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { 
  faDownload, 
  faEnvelope, 
  faPhone, 
  faMapMarkerAlt, 
  faExternalLinkAlt 
} from '@fortawesome/free-solid-svg-icons'

// Add FontAwesome icons to the library
library.add(fab, faDownload, faEnvelope, faPhone, faMapMarkerAlt, faExternalLinkAlt)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
