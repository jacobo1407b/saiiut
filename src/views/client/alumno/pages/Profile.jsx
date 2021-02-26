import React from 'react';
import UserProfile from '../../components/UserProfile';
const avatar = 'https://demos.creative-tim.com/material-dashboard-react/static/media/marc.8880a65c.jpg'



const Profile = () => {
    return (
        <div>
            <UserProfile
            avatar={avatar}
            />
        </div>
    )
}

export default Profile
