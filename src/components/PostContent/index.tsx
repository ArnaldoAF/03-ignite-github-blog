import React from 'react'
import { PostContentContainer } from './styles'
import { PostCard } from '../PostCard'
import { IPost } from "../../interfaces/postInsterfaces";


interface PostContentProps {
    post: IPost
}

export function PostContent(props: PostContentProps) {
    const { post } = props

    return (
        <PostContentContainer>
            Content
        </PostContentContainer>
    )
}
