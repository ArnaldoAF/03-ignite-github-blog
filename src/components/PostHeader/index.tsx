import React from 'react'
import { PostHeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'

export function PostHeader() {
    return (
        <PostHeaderContainer>
            <div className="header">
                <NavLink to="/">Voltar</NavLink>
                <NavLink to="/">Ver no github</NavLink>
            </div>
            <h1 className='title-L'>JavaScript data types and data structures</h1>
            <div className="footer">
                <div>cameronwll</div>
                <div>Há 1 dia</div>
                <div>5 comentários</div>
            </div>
        </PostHeaderContainer>
    )
}
