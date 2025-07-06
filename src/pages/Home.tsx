import { UserList } from "../components/UserList";

const Home = () => {
  return (
    <main className="container mx-auto px-2 py-8 bg-gray-50">
      <h1 className="text-center text-4xl font-bold text-gray-900 mb-6">User Catalog</h1>
      <UserList />
    </main>
  );
};

export default Home;
