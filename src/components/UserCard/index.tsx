import React, { useEffect, useState } from 'react'
import { UserCardContainer } from './styles'
import { IconText } from '../IconText'
import { LinkIconText } from '../LinkIconText'
import { api } from '../../services/api'

interface IUser {
    login: string;
    avatar_url: string;
    html_url: string;
    name: string;
    company: string;
    bio: string;
    followers: number;
}

export function UserCard() {
    const [user, setUser] = useState<IUser>()

    async function getUser() {
        const response = await api.get<IUser>('users/ArnaldoAF')

        console.log(response.data)
        setUser(response.data)
    }

    useEffect(() => {
        getUser()
    }, [])

    return (
        <UserCardContainer>
            <img src={user?.avatar_url} alt="" />
            <div className="content">
                <div className="header">
                    <h1 className='title-L'>{user?.name}</h1>
                    <LinkIconText icon='external' text='github' href={user?.html_url} />
                </div>
                <span className='text-M'>{user?.bio}</span>
                <div className="footer">
                    <IconText text={user?.login || ''} icon='github' />
                    {user?.company && <IconText text={user?.company || ''} icon='building' />}
                    <IconText text={`${user?.followers} seguidores`} icon='users' />
                </div>
            </div>
        </UserCardContainer>
    )
}
