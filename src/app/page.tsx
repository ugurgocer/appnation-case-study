import SearchBar from "./components/SearchBar";

export default function Dashboard() {
  return (
    <div>
      <main className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 py-4">
        <div>
          <SearchBar />
        </div>
      </main>
    </div>
  );
}
