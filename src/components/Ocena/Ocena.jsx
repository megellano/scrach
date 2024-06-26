import React from 'react';
import './Ocena.css';

// import { useTelegram } from '../../hooks/useTelegram';


function Ocena(params) {
  // const { tg, showMainButton } = useTelegram();
  


 

  return (
   
      <div className='oceny_block'>
        <div className='oceny_bg' style={{height:params.percent + '%'}}></div>
      
        <form className='oceny_wrap'>
            <input type="radio" value="-1" id="bad" className='ocena_button'
              onChange={params.onRate} name="ocenka" />
            <label className='ocenalbl' htmlFor="bad">Bad</label>

            <input type="radio" value="0" id="neutral" className='ocena_button'
              onChange={params.onRate} name="ocenka"/>
            <label className='ocenalbl' htmlFor="neutral">Neutral</label>
        
           <input type="radio" value="1" id="good" className='ocena_button'
              onChange={params.onRate} name="ocenka"/>
            <label className='ocenalbl' htmlFor="good">Good</label>
         </form>

      
        
        
        
       
      </div>
    
  );
}

export default Ocena;