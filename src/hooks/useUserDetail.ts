import { useEffect, useState } from "react"
import { type UserType, userSchema } from "../utils/validation"

//This hook fetches user details from an API based on the provided ID and returns 
//the user data, loading state, and error message.
export function useUserDetail(id: string | undefined) {
  const [user, setUser] = useState<UserType | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return

    const fetchUser = async () => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const data = await res.json()
        const parsed = userSchema.parse(data)
        setUser(parsed)
      } catch (error) {
        setError("Error fetching user details");
        console.error(error);
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [id])

  return { user, loading, error }
}
