import React from 'react';
import { Link } from 'react-router-dom';

const sections = [
  { title: 'Themes', path: '/themes', description: 'Explore the key themes of resilience, identity, and spirituality in Afro-Latin literature and film.' },
  { title: 'Timeline', path: '/timeline', description: 'Journey through the historical events that shaped Afro-Latin American experiences.' },
  { title: 'Character Profiles', path: '/characters', description: 'Meet the compelling characters from our featured works and their stories.' },
  { title: 'Quiz', path: '/quiz', description: 'Test your knowledge of Afro-Latin history, literature, and culture.' },
  { title: 'Generated Poems', path: '/poems', description: 'Experience AI-generated poetry inspired by Afro-Latin voices and experiences.' }
];

function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">The Afro-Latin Experience</h1>
        <p className="text-lg sm:text-xl mb-8 text-gray-700 dark:text-gray-300">Exploring the rich tapestry of Afro-Latin American culture and identity</p>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section) => (
          <div key={section.path} className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">{section.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{section.description}</p>
            <Link
              to={section.path}
              className="inline-block w-full sm:w-auto text-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Explore
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Home;

