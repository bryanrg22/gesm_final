import React from 'react';

function ThemeModal({ theme, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center overflow-y-auto">
      <div className="bg-white rounded-lg p-8 max-w-3xl w-full m-4">
        <div className="flex flex-col md:flex-row mb-6">
          {theme.image && (
            <img 
              src={theme.image} 
              alt={theme.title} 
              className="w-full md:w-1/3 h-48 object-cover mb-4 md:mb-0 md:mr-6 rounded"
            />
          )}
          <div>
            <h2 className="text-2xl font-bold mb-2">{theme.title}</h2>
            {(theme.author || theme.director) && (
              <p className="text-gray-600 mb-4">
                {theme.type === 'book' ? 'Author' : 'Director'}: {theme.author || theme.director}
              </p>
            )}
            <p className="mb-4">{theme.fullDescription}</p>
          </div>
        </div>
        {theme.type === 'overall' ? (
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Related Works:</h3>
            <ul className="list-disc pl-5">
              {theme.relatedWorks.map((work, index) => (
                <li key={index} className="mb-2">{work}</li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Quotes:</h3>
            <ul className="list-disc pl-5">
              {theme.quotes.map((quote, index) => (
                <li key={index} className="mb-2">{quote}</li>
              ))}
            </ul>
          </div>
        )}
        <button
          onClick={onClose}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default ThemeModal;

