import React, { useEffect, useState } from 'react'
import './Nav.css'
import { useHistory } from 'react-router-dom';
function Nav() {
    const [show,showhandle] = useState(false);

    const history = useHistory();
    const transitionNavBar = ()=>{
   

    if(window.scrollY>100){
        showhandle(true);
    }
    else{
        showhandle(false);
    }

}
useEffect(()=>{
    window.addEventListener('scroll',transitionNavBar);
    return ()=>window.removeEventListener('scroll',transitionNavBar);
   },[])
  return (
    <div className={`nav ${show && "nav_black"}`}>
        <div className='nav_content'>
        <img 
        onClick={()=>history.push('/')}
      className='image__logo'
      src='https://pluspng.com/img-png/movie-png-hd-movie-logo-cliparts-2524910-1118.png'
      alt=''
      />

      <img
      onClick={()=>history.push('/profile')}
      className='image__avatar'
      src='https://th.bing.com/th/id/OIP.eGlu9JyAoyqz0kioI9TsVwHaHa?rs=1&pid=ImgDetMain'
      alt=''
      />
     
        </div>
     
    </div>
  )
}

export default Nav
