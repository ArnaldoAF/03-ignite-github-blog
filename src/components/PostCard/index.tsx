import React from 'react'
import { PostCardContainer } from './styles'
import { NavLink } from 'react-router-dom'
import { IPost } from '../../interfaces/postInsterfaces'
import { dateString } from '../../utils/formatter'

import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface PostCardProps {
    post: IPost
}

export function PostCard(props: PostCardProps) {
    const { post } = props
    return (
        <PostCardContainer to={`/post/${post.number}`}>
            <div>
                <h4 className='title-S'>{post.title}</h4>
                <p className='text-S'>{dateString(post.created_at)}</p>
            </div>
            <main>
                <Markdown remarkPlugins={[remarkGfm]}>
                    {post.body}
                </Markdown>
            </main>

        </PostCardContainer>

    )
}
