
import { useParams } from "react-router-dom";
import { PostContent } from "../../components/PostContent";
import { PostHeader } from "../../components/PostHeader";
import { PostPageContainer } from "./styles";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { IPost } from "../../interfaces/postInsterfaces";

export function PostPage() {
    const { postId } = useParams();
    const [post, setPost] = useState<IPost>()


    async function getPostInfo() {
        const response = await api.get(`repos/ArnaldoAF/03-ignite-github-blog/issues/${postId}`)

        console.log(response.data)
        setPost(response.data)
        // setUser(response.data)
    }

    useEffect(() => {
        getPostInfo()
    }, [])

    return (
        <PostPageContainer>
            {post &&
                <>
                    <PostHeader post={post} />
                    <PostContent post={post} />
                </>
            }

        </PostPageContainer>
    )
}