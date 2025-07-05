import { useEffect, useState } from "react";
import { type UserType, usersArraySchema } from "../utils/validation";

export const useUsers = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
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
  }, []);

  return {
    users,
    loading,
    error
  }
};
