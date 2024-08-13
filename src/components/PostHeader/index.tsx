import React from 'react'
import { PostHeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'
import { IconText } from '../IconText'
import { LinkIconText } from '../LinkIconText'

export function PostHeader() {
    return (
        <PostHeaderContainer>
            <div className="header">

                <LinkIconText icon='back' text='voltar' href='/' />
                <LinkIconText icon='external' text='Ver no github' href='/' />

            </div>
            <h1 className='title-L'>JavaScript data types and data structures</h1>
            <div className="footer">
                <IconText text="cameronwll" icon='github' />
                <IconText text="Há 1 dia" icon='calendar' />
                <IconText text={`${5} comentários`} icon='comentary' />
            </div>
        </PostHeaderContainer>
    )
}
