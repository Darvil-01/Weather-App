
import { createRoot } from 'react-dom/client'
import './index.css'
import HeroSection from "./Componets/HeroSection.jsx"
import LocationProvider from "./locationContext.jsx"

createRoot(document.getElementById('root')).render(
  <LocationProvider>
    <HeroSection />
  </LocationProvider>
)
