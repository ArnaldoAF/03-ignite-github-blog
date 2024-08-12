
import { PostContent } from "../../components/PostContent";
import { PostHeader } from "../../components/PostHeader";
import { PostPageContainer } from "./styles";

export function PostPage() {
    return (
        <PostPageContainer>
            <PostHeader />
            <PostContent />
        </PostPageContainer>
    )
}