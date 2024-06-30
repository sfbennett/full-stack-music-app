import React from "react";
import { useState, useEffect } from "react";
import styles from "../components/music.module.css";

const AllArtists = () => {
  const [allArtists, setAllArtists] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchAllArtists = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://music-api-8rda.onrender.com/artists"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch all artists!");
      }
      const data = await response.json();
      setAllArtists(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllArtists();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {allArtists.map((artist) => (
        <div key={artist.id} className={styles.artistCard}>
          <p>Name: {artist.name}</p>
          <p>Bio: {artist.bio}</p>
          <p>Genre: {artist.genre}</p>
        </div>
      ))}
    </div>
  );
};

export default AllArtists;
