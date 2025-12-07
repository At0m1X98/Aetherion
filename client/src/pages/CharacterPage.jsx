// client/src/pages/CharacterPage.jsx
import React, { useEffect, useState, useContext } from "react";
import { getCharacter } from "../api/character";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const CharacterPage = () => {
  const { user } = useContext(AuthContext);
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const data = await getCharacter();
        setCharacter(data);
      } catch (err) {
        setError(err.message || "Failed to load character");
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading character...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white">
        <p>{error}</p>
      </div>
    );
  }

  if (!character) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white">
        <p>You have no character yet.</p>
        <Link
          to="/character/create"
          className="mt-4 px-4 py-2 bg-gradient-to-r from-[#DFC89E] to-[#8A5C30] 
                     hover:from-[#8A5C30] hover:to-[#DFC89E] rounded-lg font-semibold"
        >
          Create Character
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex flex-col items-center p-6 text-white">
      <h1 className="text-3xl sm:text-4xl font-bold text-[#DFC89E] mb-6">
        {user.name}'s Character
      </h1>

      <div className="w-full max-w-md bg-[#0F1922]/80 p-6 rounded-xl shadow-xl border border-[#895931]/30 backdrop-blur-sm">
        <h2 className="text-2xl font-semibold text-[#DFC89E] mb-4">
          {character.name}
        </h2>
        <div className="flex flex-col gap-3 text-[#C8C8C8]">
          <div className="flex justify-between">
            <span className="text-[#DFC89E]/70">Race:</span>
            <span>{character.race.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#DFC89E]/70">Class:</span>
            <span>{character.class.name}</span>
          </div>
        </div>
        <Link
          to="/character/edit"
          className="mt-6 inline-block px-4 py-2 bg-gradient-to-r from-[#DFC89E] to-[#8A5C30] 
                     hover:from-[#8A5C30] hover:to-[#DFC89E] rounded-lg font-semibold text-black transition"
        >
          ✎ Edit Character
        </Link>
      </div>
    </div>
  );
};

export default CharacterPage;
