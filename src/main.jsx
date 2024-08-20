import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ImageSlider from './ImageSlider.jsx'

import car1 from './Images/car1.jpg'
import car2 from './Images/car2.jpg'
import car3 from './Images/car3.jpg'
import car4 from './Images/car4.jpg'
import car5 from './Images/car5.jpg'

const carImages=[car1,car2,car3,car4,car5]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ImageSlider  images={carImages}/>
  </StrictMode>,
)
