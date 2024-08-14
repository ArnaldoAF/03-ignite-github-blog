import React, { useEffect, useState } from 'react'
import { PostListContainer } from './styles'
import { PostCard } from '../PostCard'
import { api } from '../../services/api'
import { IPost } from '../../interfaces/postInsterfaces'




export function PostList() {
    const [postList, setPostList] = useState<IPost[]>([])

    const [searchTerm, setSearchTerm] = React.useState("");
    const [delayedSearchTerm, setDelayedSearchTerm] = React.useState("");

    useEffect(() => {
        const delayDebounceFn = setTimeout(async () => {
            console.log(searchTerm);
            // Send Axios request here
            setDelayedSearchTerm(searchTerm);
            await getPosts(searchTerm)
        }, 1000);

        return () => clearTimeout(delayDebounceFn);
    }, [searchTerm]);

    async function getPosts(searchString?: string) {
        const search = searchString;
        const repo = `repo:ArnaldoAF/03-ignite-github-blog/`;
        const response = await api.get('search/issues', {
            params: {
                q: `${search && search.trim().length > 0 ? search + " " : ''}${repo}`
                // q: repo
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
                <input type="text" placeholder='Buscar Conteúdo' onChange={(e) => setSearchTerm(e.target.value)} />
            </form>
            <main className='content'>
                {postList.map(post => <PostCard post={post} />)}
            </main>
        </PostListContainer>
    )
}
