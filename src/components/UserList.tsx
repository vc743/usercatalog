import { useUsers } from "../hooks/useUsers";

export const UserList = () => {
  const { users, loading, error } = useUsers();

  if (loading) return <p className="text-center">Loading users...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {users.map((user) => (
        <div key={user.id} className="p-4 border rounded hover:bg-gray-100">
          <h2 className="text-lg font-bold">{user.name}</h2>
          <p>{user.email}</p>
          <p className="text-sm text-gray-500">@{user.username}</p>
        </div>
      ))}
    </div>
  );
};
