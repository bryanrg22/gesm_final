import React, { useState } from 'react';
import CharacterModal from '../components/CharacterModal';
import { characters } from '../data/charactersData';

function Characters() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (character) => {
    setSelectedCharacter(character);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Character Profiles</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {characters.map((character) => (
          <div key={character.id} className="bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg p-6">
            <img
              src={character.image}
              alt={character.name}
              className="w-full h-64 object-cover mb-4 rounded"
            />
            <h2 className="text-2xl font-semibold mb-2">{character.name}</h2>
            <p className="mb-4">{character.shortBio}</p>
            <button
              onClick={() => openModal(character)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Read More
            </button>
          </div>
        ))}
      </div>
      {selectedCharacter && (
        <CharacterModal
          character={selectedCharacter}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default Characters;

