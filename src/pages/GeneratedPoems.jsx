import React, { useState } from 'react';
import { poems } from '../data/poemsData';

function GeneratedPoems() {
  const [newPoem, setNewPoem] = useState('');
  const [newAnalysis, setNewAnalysis] = useState('');
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/generate-poem', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate poem');
      }

      const data = await response.json();
      setNewPoem(data.poem);
      setNewAnalysis(data.analysis);
    } catch (err) {
      setError('Failed to generate poem. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Generated Poems</h1>
      
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Generate a New Poem</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="prompt" className="block text-sm font-medium text-gray-700">
              Enter a theme for the poem:
            </label>
            <input
              type="text"
              id="prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
          >
            {isLoading ? 'Generating...' : 'Generate Poem'}
          </button>
        </form>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        {newPoem && (
          <div className="mt-4 bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Your Generated Poem:</h3>
            <pre className="whitespace-pre-wrap font-serif text-lg mb-4">
              {newPoem}
            </pre>
            <h4 className="text-lg font-semibold mb-2">Analysis:</h4>
            <p className="text-gray-700">{newAnalysis}</p>
          </div>
        )}
      </div>

      <h2 className="text-2xl font-semibold mb-4">Pre-generated Poems</h2>
      <div className="space-y-8">
        {poems.map((poem) => (
          <div key={poem.id} className="bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-4">{poem.title}</h3>
            <pre className="whitespace-pre-wrap font-serif text-lg mb-4">
              {poem.content}
            </pre>
            <p className="text-gray-600 italic mb-4">Author: {poem.author}</p>
            <div>
              <h4 className="text-lg font-semibold mb-2">Analysis:</h4>
              <p className="text-gray-700">{poem.analysis}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GeneratedPoems;

