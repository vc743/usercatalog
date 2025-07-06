import { type UserType } from "../utils/userValidation";

interface UserCardProps {
  user: UserType;
}

const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className="p-4 rounded-lg border border-gray-300 bg-white text-gray-900 shadow-2xs hover:shadow-lg transition-shadow space-y-1.5">
      <h2 className="text-lg font-bold">{user.name}</h2>
      <p className="text-sm text-gray-500">{user.email}</p>
      <p className="inline-flex items-center rounded-full px-2.5 py-0.5 font-semibold bg-gray-100 text-xs">
        @{user?.username}
      </p>
    </div>
  );
};

export default UserCard;
