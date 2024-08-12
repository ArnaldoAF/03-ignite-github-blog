
import { PostList } from "../../components/PostList";
import { UserCard } from "../../components/UserCard";
import { PostPageContainer } from "./styles";

export function PostPage() {
    return (
        <PostPageContainer>
            <UserCard />
            <PostList />
        </PostPageContainer>
    )
}