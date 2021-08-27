import React from 'react'
import Preloader from '../../../assets/common/Preloader'

const  ProfileInfo =(props)=> {
    if(!props.profile){
        return <Preloader />
    }

        return (
            <div>
                 <div>
                <img src='https://mindingthebrainpodcast.com/wp-content/uploads/2019/01/arch-bridge-clouds-814499-e1548619938427-678x381.jpg' alt='mc nkar' />
            </div>
            <div>
                <img src={props.profile.photos.large} alt=''/>
                aswa + description
            </div>
            </div>
           
        )
    }
export default ProfileInfo