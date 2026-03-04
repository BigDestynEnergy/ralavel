import { useEffect, useState } from "react";

const API_KEY = "baf15166f072df15579d2b76d037167bdc5dd1e2"

export default function ComicsDisplay({ searchQuery }) {
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchComics();
  }, [searchQuery]);

  async function fetchComics() {
    setLoading(true);

    const baseUrl = "https://corsproxy.io/?https://comicvine.gamespot.com/api/";
    const apiKey = API_KEY;

    const endpoint = searchQuery
      ? `search/?api_key=${apiKey}&format=json&query=${searchQuery}&resources=issue`
      : `issues/?api_key=${apiKey}&format=json&sort=date_added:desc&limit=20`;

    try {
      const res = await fetch(baseUrl + endpoint);
      const data = await res.json();
      setComics(data.results || []);
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  }

  return (
    <section className="comics-container">
      {loading && <p>Loading comics...</p>}

      {!loading && comics.length === 0 && <p>No comics found.</p>}

      <div className="comic-grid">
        {comics.map((comic) => (
          <div className="comic-card" key={comic.id}>
            <img
              src={comic.image?.original_url}
              alt={comic.name}
            />
            <h3>{comic.name}</h3>
            <p>{comic.volume?.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}