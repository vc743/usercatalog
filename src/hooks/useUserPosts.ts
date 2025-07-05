import { useEffect, useState } from "react";
import { request, gql } from "graphql-request";
import { type PostType, postsResponseSchema } from "../utils/postValidation";

const POSTS_QUERY = gql`
    query getPosts($userId: ID!) {
        user(id: $userId) {
            posts {
                data {
                    id
                    title
                }
            }
        }
    }
`

export const useUserPosts = (userId: string | undefined) => {
    const [posts, setPosts] = useState<PostType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!userId) return;

        const fetchPosts = async () => {
            try {
                const response = await request("https://graphqlzero.almansi.me/api", POSTS_QUERY, { userId });
                const parsedResponse = postsResponseSchema.parse(response);
                setPosts(parsedResponse.user.posts.data);
            } catch (err) {
                setError(err instanceof Error ? err.message : "An error occurred");
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, [userId]);

    return { posts, loading, error };
}