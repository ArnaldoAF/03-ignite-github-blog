import React from 'react'
import { PostCardContainer } from './styles'

export function PostCard() {
    return (
        <PostCardContainer>
            <div>
                <h4 className='title-S'>JavaScript data types and data structures</h4>
                <p className='text-S'>Há 1 dia</p>
            </div>
            <main>
                Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures.
            </main>

        </PostCardContainer>
    )
}
