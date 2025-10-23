import { useEffect, useState } from "react";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results ?? []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Ocurrió un error: {error.message}</p>;

  return (
    <div className="character-container">
      <h3>API Rick and Morty</h3>
      <ul className="character-list">
        {characters.map((character) => (
          <li className="character-card" key={character.id}>
            <img
              className="character-image"
              src={character.image}
              alt={character.name}
              loading="lazy"
            />
            <h2>{character.name}</h2>
            <p>{character.species}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}