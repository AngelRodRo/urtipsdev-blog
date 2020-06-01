import React from 'react'
import styled from 'styled-components'

const StyledLink = styled.a`
    display: flex;
    text-decoration: none;
    color: inherit;
    margin: 10px;
    box-shadow: none;

    height: 30px;
`

const StyledProfileImg = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 15px;
`

export default function UserInfo ({ user }) {
    const userFullname = `${user.firstName} ${user.lastName}`
    return (
        <StyledLink href={user.profileLink}>
            <StyledProfileImg src={user.profileImg} />
            <span>{userFullname}</span>
        </StyledLink>
    )
}

UserInfo.displayName = "UserInfo"