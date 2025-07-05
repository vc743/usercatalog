import { UserList } from "./components/UserList";

function App() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">User Catalog</h1>
      <UserList />
    </div>
  )
}

export default App;
