import React from 'react'
import { PostContentContainer } from './styles'
import { PostCard } from '../PostCard'
import { IPost } from "../../interfaces/postInsterfaces";
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'


interface PostContentProps {
    post: IPost
}

export function PostContent(props: PostContentProps) {
    const { post } = props

    return (
        <PostContentContainer>

            <Markdown remarkPlugins={[remarkGfm]}>

                {post.body}
            </Markdown>
        </PostContentContainer>
    )
}
