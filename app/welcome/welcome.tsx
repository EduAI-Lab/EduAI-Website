import { Link } from "react-router";

export function Welcome() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen pt-16 pb-4">
      <h1 className="text-4xl font-bold mb-8">Welcome to AI-Ed Research</h1>
      <Link to="/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
        Go to Main Page
      </Link>
    </main>
  );
}
