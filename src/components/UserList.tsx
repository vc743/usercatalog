import { Link } from "react-router";
import { useUsers } from "../hooks/useUsers";
import SearchInput from "../components/SearchInput";
import { useState } from "react";

export const UserList = () => {
  const { users, loading, error } = useUsers();
  const [search, setSearch] = useState("");
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p className="text-center">Loading users...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <>
      <SearchInput
        value={search}
        onChange={setSearch}
        placeholder="Search by name..."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {filteredUsers.length === 0 ? (
          <p className="text-center col-span-full">No user found</p>
        ) : (
          filteredUsers.map((user) => (
            <Link to={`/users/${user.id}`} key={user.id} className="block">
              <div className="p-4 border rounded hover:bg-gray-100">
                <h2 className="text-lg font-bold">{user.name}</h2>
                <p>{user.email}</p>
                <p className="text-sm text-gray-500">@{user.username}</p>
              </div>
            </Link>
          ))
        )}
      </div>
    </>
  );
};
