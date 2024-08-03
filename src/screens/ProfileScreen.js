import React from 'react'
import './ProfileScreen.css'
import Nav from '../Nav'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'


function ProfileScreen() {
    const user = useSelector(selectUser);

  return (
    <div className='profileScreen'>
      <Nav/>
      <div className='profileScreen__body'>
        <h1>Edit Profile</h1>
        <div className='profileScreen__info'>
            <img src='https://th.bing.com/th/id/OIP.eGlu9JyAoyqz0kioI9TsVwHaHa?rs=1&pid=ImgDetMain' alt=''/>
        </div>
        <div className="profileScreern__details">
            <h2>
                {user.email}
            </h2>

            <div className="profileScreen__plans">
                <h3>Plans</h3>
                <button onClick={()=>auth.signOut()} className="profileSreen__signOut">Sign Out</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen
