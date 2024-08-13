import React, { useEffect, useState } from 'react'
import { PostListContainer } from './styles'
import { PostCard } from '../PostCard'
import { api } from '../../services/api'
import { IPost } from '../../interfaces/postInsterfaces'




export function PostList() {
    const [postList, setPostList] = useState<IPost[]>([])

    async function getPosts() {
        const repo = `repo:ArnaldoAF/03-ignite-github-blog/`;
        const response = await api.get('search/issues', {
            params: {
                q: repo
            }
        })

        const data = response.data;
        const postData = data.items

        console.log(response.data)
        setPostList(postData)
    }

    useEffect(() => {
        getPosts()
    }, [])
    return (
        <PostListContainer>
            <form action="">
                <div className='form-header'>
                    <h4 className='title-S'>Publicações</h4>
                    <p className='text-S'>{postList.length} publicações</p>

                </div>
                <input type="text" placeholder='Buscar Conteúdo' />
            </form>
            <main className='content'>
                {postList.map(post => <PostCard post={post} />)}
            </main>
        </PostListContainer>
    )
}
