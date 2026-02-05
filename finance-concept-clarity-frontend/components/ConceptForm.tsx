"use client";

import { useState } from "react";

export default function ConceptForm() {
  const [term, setTerm] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!term.trim()) return;

    setLoading(true);
    setError("");
    setResult("");

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL as string,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ term }),
        }
      );

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const data: { explanation: string } = await response.json();
      setResult(data.explanation);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="e.g. Depreciation, Balance Sheet, EBITDA"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="text-black w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
        >
          {loading ? "Explaining..." : "Explain Concept"}
        </button>
      </form>

      {error && (
        <p className="text-red-500 mt-4 text-center">{error}</p>
      )}

      {result && (
        <div className="mt-6 bg-gray-100 p-5 rounded-lg">
          <h3 className="font-semibold mb-2">Explanation</h3>
          <p className="text-gray-800 whitespace-pre-line">{result}</p>
        </div>
      )}
    </>
  );
}
