
import './App.css';
import React from 'react';
import { Box, More } from './Layout';
import { useId } from 'react';



function App() {

  return(
    <article className='Cars'>
      <Box imagem='./images/icon-sedans.svg'
       class='Sedans' 
        title='SEDANS'
          content='Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city 
  or on your next road trip.'/>
      <Box imagem='./images/icon-suvs.svg'
      class='Suvs
        ' title='SUVS'
          content='Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation 
  and off-road adventures.'/>
      <Box imagem='./images/icon-luxury.svg'
      class='Luxury' 
        title='LUXURY'
          content='Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury 
  rental and arrive in style.' />
    </article>
  );
}


export default App;


