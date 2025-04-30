export default function NotFound() {
    return (
      <div className="flex flex-col items-center justify-center text-center px-4 py-10">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">Location Not Found</p>
        <a
          href="/"
          className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition"
        >
          Go back home
        </a>
      </div>
    );
  }