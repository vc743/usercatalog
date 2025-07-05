import { useParams } from "react-router";

const UserDetail = () => {
    const { id } = useParams<{ id: string }>();

  return (
    <div className="max-w-2xl mx-auto p-4">
        <h2 className="text-xl font-bold">User Details</h2>
        <p>Loading details for user ID: {id}</p>
    </div>
  )
}

export default UserDetail