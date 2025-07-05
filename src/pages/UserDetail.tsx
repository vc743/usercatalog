import { useParams, Link } from "react-router";
import { useUserPosts } from "../hooks/useUserPosts";
import { useUserDetail } from "../hooks/useUserDetail";

const UserDetail = () => {
  const { id } = useParams<{ id: string }>();

  const { user, loading: userLoading, error: userError } = useUserDetail(id)
  const { posts, loading: postsLoading, error: postsError } = useUserPosts(id)

  if (userLoading || postsLoading) return <p className="text-center">Loading...</p>
  if (userError || postsError) return <p className="text-red-500 text-center">{userError || postsError}</p>

  return (
    <div className="max-w-3xl mx-auto p-4">
      <Link to="/" className="text-blue-500 underline mb-4 inline-block">
        &larr; Back
      </Link>
      <h2 className="text-xl font-bold">{user?.name}</h2>
      <p>Email: {user?.email}</p>
      <p>Username: @{user?.username}</p>
      <p>Phone: {user?.phone}</p>
      <p>Website: {user?.website}</p>

      <h3 className="mt-6 text-lg font-semibold">Posts</h3>
      <ul className="space-y-4 mt-2">
        {posts.map((post) => (
          <li key={post.id} className="border p-3 rounded">
            <h4 className="font-bold">{post.title}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDetail;
