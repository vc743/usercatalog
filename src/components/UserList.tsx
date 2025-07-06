import { Link } from "react-router";
import { useUsers } from "../hooks/useUsers";
import SearchInput from "../components/SearchInput";
import { useState } from "react";
import UserCard from "./UserCard";

export const UserList = () => {
  const { users, loading, error } = useUsers();
  const [search, setSearch] = useState("");
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p className="text-center">Loading users...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <section className="space-y-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        <SearchInput
          value={search}
          onChange={setSearch}
          placeholder="Search by name..."
          className="px-3 py-2 text-sm border border-gray-300 rounded w-full md:w-1/2 placeholder:text-gray-500 md:col-span-2 place-self-center lg:col-span-3 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-300 bg-white"
        />
        {filteredUsers.length === 0 ? (
          <p className="text-center col-span-full">No user found</p>
        ) : (
          filteredUsers.map((user) => (
            <Link to={`/users/${user.id}`} key={user.id} className="block">
              <UserCard user={user}/>
            </Link>
          ))
        )}
      </div>
    </section>
  );
};
