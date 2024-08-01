import React from 'react'
import { UserCardContainer } from './styles'

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
                    <div>ArnaldoAF</div>
                    <div>Rockseat</div>
                    <div>32 seguidores</div>
                </div>
            </div>
        </UserCardContainer>
    )
}
