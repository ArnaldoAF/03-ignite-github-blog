import React from 'react'
import { PostListContainer } from './styles'
import { PostCard } from '../PostCard'

export function PostList() {
    return (
        <PostListContainer>
            <form action="">
                <div className='form-header'>
                    <h4 className='title-S'>Publicações</h4>
                    <p className='text-S'>6 publicações</p>

                </div>
                <input type="text" placeholder='Buscar Conteúdo' />
            </form>
            <main className='content'>
                {Array.from({ length: 6 }).map(x => <PostCard />)}
            </main>
        </PostListContainer>
    )
}
