import React from 'react'
import { PostListContainer } from './styles'

export function PostList() {
    return (
        <PostListContainer>
            <form action="">
                <div>
                    <h4 className='title-S'>Publicações</h4>
                    <p className='text-S'>6 publicações</p>

                </div>
                <input type="text" placeholder='Buscar Conteúdo' />
            </form>

        </PostListContainer>
    )
}
