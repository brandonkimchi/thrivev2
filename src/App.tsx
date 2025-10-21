import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 flex items-center justify-center p-6">
      <div className="w-full max-w-xl rounded-2xl shadow-lg bg-white p-8">
        <h1 className="text-3xl font-bold tracking-tight">thrivev2</h1>
        <p className="mt-2 text-sm text-gray-600">
          React + TypeScript + Vite + Tailwind CSS
        </p>

        <div className="mt-6 flex items-center gap-3">
          <button
            onClick={() => setCount((c) => c + 1)}
            className="rounded-xl px-4 py-2 border bg-gray-900 text-white hover:opacity-90 transition"
          >
            Count: {count}
          </button>
          <span className="text-gray-500">Click to increment</span>
        </div>
      </div>
    </main>
  );
}
