import React from 'react'
import { PostHeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'
import { IconText } from '../IconText'
import { LinkIconText } from '../LinkIconText'
import { IPost } from "../../interfaces/postInsterfaces";
import { dateString } from '../../utils/formatter'


interface PostHeaderProps {
    post: IPost
}

export function PostHeader(props: PostHeaderProps) {
    const { post } = props

    return (
        <PostHeaderContainer>
            <div className="header">

                <LinkIconText icon='back' text='voltar' href='/' />
                <LinkIconText icon='external' text='Ver no github' href={post.html_url} />

            </div>
            <h1 className='title-L'>{post.title}</h1>
            <div className="footer">
                <IconText text={post.user.login} icon='github' />
                <IconText text={dateString(post.created_at)} icon='calendar' />
                <IconText text={`${post.comments} comentários`} icon='comentary' />
            </div>
        </PostHeaderContainer>
    )
}
