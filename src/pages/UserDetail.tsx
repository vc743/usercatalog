import { useParams, Link } from "react-router";
import { useUserPosts } from "../hooks/useUserPosts";
import { useUserDetail } from "../hooks/useUserDetail";
import { Mail, Phone, Globe, MapPin, Building, ArrowLeft } from "lucide-react";

const UserDetail = () => {
  // Get the user ID from the route URL
  const { id } = useParams<{ id: string }>();

  // Fetch user details from REST API
  const { user, loading: userLoading, error: userError } = useUserDetail(id);
  
  // Fetch posts from GraphQL API
  const { posts, loading: postsLoading, error: postsError } = useUserPosts(id);
  
  if (userLoading || postsLoading)
    return <p className="text-center">Loading...</p>;
  if (userError || postsError)
    return (
      <p className="text-red-500 text-center">{userError || postsError}</p>
    );

  return (
    <div className="container mx-auto px-2 py-8 bg-gray-50">
      <Link
        to="/"
        className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium border border-gray-300 px-4 py-2 mb-4 bg-white"
      >
        <ArrowLeft className="size-4" />
        Back
      </Link>
      <div className="rounded-lg border border-gray-300 text-gray-900 shadow-2xs p-6 mb-6 bg-white">
        <h2 className="font-semibold tracking-tight text-2xl">{user?.name}</h2>
        <p className="inline-flex items-center rounded-full px-2.5 py-0.5 font-semibold bg-gray-100 text-xs">
          @{user?.username}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Info</h3>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-gray-500" />
              <span>{user?.email}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-gray-500" />
              <span>{user?.phone}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Globe className="h-5 w-5 text-gray-500" />
              <a
                href={`http://${user?.website}`}
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                {user?.website}
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Location</h3>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-gray-500" />
              <span>
                {user?.address.street}, {user?.address.suite},{" "}
                {user?.address.city}, {user?.address.zipcode}
              </span>
            </div>
          </div>
        </div>
        <div className="mt-6 space-y-4">
          <h3 className="font-semibold text-lg flex items-center">
            <Building className="h-5 w-5 mr-2" />
            Professional information
          </h3>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h4 className="font-medium">{user?.company.name}</h4>
            <p className="text-gray-600 italic">
              "{user?.company.catchPhrase}"
            </p>
            <p className="text-sm text-gray-500 mt-2">{user?.company.bs}</p>
          </div>
        </div>
      </div>

      <section className="rounded-lg border border-gray-300 text-gray-900 shadow-2xs p-6 bg-white">
        <h3 className="text-2xl font-semibold tracking-tight">
          {user?.name} Posts
        </h3>
        <ul className="space-y-4 mt-2">
          {posts.map((post) => (
            <li key={post.id} className="border border-gray-300 p-3 rounded">
              <h4 className="font-bold">{post.title}</h4>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default UserDetail;
