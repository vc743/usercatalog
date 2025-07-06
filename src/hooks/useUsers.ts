import { useEffect, useState } from "react";
import { usersArraySchema } from "../utils/validation";
import { useUserStore } from "../store/userStore";

// Hook to fetch and return users from REST API
// Uses Zustand store to avoid multiple network requests
export const useUsers = () => {
  const users = useUserStore((state) => state.users);
  const setUsers = useUserStore((state) => state.setUsers);

  const [loading, setLoading] = useState(users.length === 0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // If users are already loaded, skip fetching
    if (users.length > 0) return;

    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        const parsedData = usersArraySchema.parse(data);
        setUsers(parsedData);
        console.log(parsedData);
      } catch (error) {
        setError("Failed to fetch users");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [users, setUsers]);

  return {
    users,
    loading,
    error,
  };
};
