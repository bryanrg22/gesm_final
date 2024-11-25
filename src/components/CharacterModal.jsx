import React from 'react';

function CharacterModal({ character, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full">
        <h2 className="text-2xl font-bold mb-4">{character.name}</h2>
        <img
          src={character.image}
          alt={character.name}
          className="w-full h-64 object-cover mb-4 rounded"
        />
        <p className="mb-4">{character.fullBio}</p>
        <h3 className="text-xl font-semibold mb-2">Key Moments:</h3>
        <ul className="list-disc pl-5 mb-4">
          {character.keyMoments.map((moment, index) => (
            <li key={index} className="mb-2">{moment}</li>
          ))}
        </ul>
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

export default CharacterModal;

