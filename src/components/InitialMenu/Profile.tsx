import React from 'react'
import styled from 'styled-components'

interface ProfileInterface {
    user: string
}
const Profile = ({user}: ProfileInterface) => {
    return (
        <ProfileWrapper>
            <img src="/assets/image/perfil.jpg" alt={user} />
            <span>{user}</span>
        </ProfileWrapper>
    )
}

export default Profile


const ProfileWrapper = styled.div`
    display: flex;
    gap: .5rem;
    align-items: center;
    margin-bottom: 5%;
    img {
        width: 60px;
        height: 60px;
        object-fit: cover;
        border-radius: 100%;
    }

    span {user}
`