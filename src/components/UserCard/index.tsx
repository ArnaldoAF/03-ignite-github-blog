import React from 'react'
import { UserCardContainer } from './styles'
import { IconText } from '../IconText'

export function UserCard() {
    return (
        <UserCardContainer>
            <img src="https://api.dicebear.com/9.x/bottts/jpg" alt="" />
            <div className="content">
                <div className="header">
                    <h1 className='title-L'>Arnaldo Assis</h1>
                    <a href="">Github</a>
                </div>
                <span className='text-M'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ullamcorper scelerisque libero, a ullamcorper dui dictum quis. Vestibulum rutrum, sapien in faucibus posuere, lectus leo lacinia mi, eget fermentum ante. </span>
                <div className="footer">
                    <IconText text="ArnaldoAF" icon='github' />
                    <IconText text="Rockseat" icon='building' />
                    <IconText text={`${32} seguidores`} icon='users' />
                </div>
            </div>
        </UserCardContainer>
    )
}
