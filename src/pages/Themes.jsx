import React, { useState } from 'react';
import { themes } from '../data/themesData';

function Themes() {
  const [selectedTheme, setSelectedTheme] = useState(null);

  const overallThemes = themes.filter(theme => theme.type === 'overall');
  const bookThemes = themes.filter(theme => theme.type === 'book');
  const filmThemes = themes.filter(theme => theme.type === 'film');

  const renderThemeCard = (theme) => (
    <div key={theme.id} className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
      <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-900 dark:text-white">{theme.title}</h2>
      {(theme.author || theme.director) && (
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-2">
          {theme.type === 'book' ? `Author: ${theme.author}` : `Director: ${theme.director}`}
        </p>
      )}
      {theme.image && (
        <img 
          src={theme.image} 
          alt={theme.title} 
          className="w-full h-40 sm:h-48 object-cover mb-4 rounded"
        />
      )}
      <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">{theme.description}</p>
      <button
        onClick={() => setSelectedTheme(theme)}
        className="w-full sm:w-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
      >
        Learn More
      </button>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Themes in Afro-Latin Literature and Film</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Overarching Themes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {overallThemes.map(renderThemeCard)}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Themes in Literature</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bookThemes.map(renderThemeCard)}
        </div>
      </section>

      {selectedTheme && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{selectedTheme.title}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {selectedTheme.type === 'book' ? `Author: ${selectedTheme.author}` : ''}
              {selectedTheme.type === 'film' ? `Director: ${selectedTheme.director}` : ''}
              {selectedTheme.type === 'overall' ? 'Overarching Theme' : ''}
            </p>
            {selectedTheme.image && (
              <img 
                src={selectedTheme.image} 
                alt={selectedTheme.title} 
                className="w-full h-48 object-cover mb-4 rounded"
              />
            )}
            <p className="mb-4 text-gray-700 dark:text-gray-300">{selectedTheme.fullDescription}</p>
            {selectedTheme.type === 'overall' ? (
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Related Works:</h3>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                  {selectedTheme.relatedWorks.map((work, index) => (
                    <li key={index} className="mb-2">{work}</li>
                  ))}
                </ul>
              </div>
            ) : (
              selectedTheme.quotes && (
                <div>
                  <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Quotes:</h3>
                  <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                    {selectedTheme.quotes.map((quote, index) => (
                      <li key={index} className="mb-2">{quote}</li>
                    ))}
                  </ul>
                </div>
              )
            )}
            <button
              onClick={() => setSelectedTheme(null)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Themes;

