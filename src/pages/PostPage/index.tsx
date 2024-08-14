
import { useParams } from "react-router-dom";
import { PostContent } from "../../components/PostContent";
import { PostHeader } from "../../components/PostHeader";
import { PostPageContainer } from "./styles";

export function PostPage() {
    const { postId } = useParams();
    return (
        <PostPageContainer>
            <PostHeader />
            {postId}
            <PostContent />
        </PostPageContainer>
    )
}