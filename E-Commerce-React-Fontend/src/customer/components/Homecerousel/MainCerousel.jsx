import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCerouselData } from './MainCerouselData';


const MainCerousel = () => {
  const items = mainCerouselData.map((item) => <img className='cursor-pointer' role='presentation' src={item.image} alt="" />)
  return (
    <AliceCarousel
      className=""
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={2500}
      infinite
      
    />
  )
}

export default MainCerousel