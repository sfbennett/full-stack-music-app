import React from "react";
import { useState, useEffect } from "react";
import styles from "../components/music.module.css";

const Artists = () => {
  const [artist, setArtist] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchRandomArtist = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://music-api-8rda.onrender.com/artists/random-artist"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch random artist!");
      }
      const data = await response.json();
      setArtist(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchRandomArtist();
  }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  return (
    <div className={styles.randomcard}>
      <div className={styles.info}>
        <h2 className={styles.heading}>Artist Generator</h2>
        <p>Name: {artist.name}</p>
        <p>Bio: {artist.bio}</p>
        <p className={styles.genre}>Genre: {artist.genre}</p>
        {/* <img src="./public/spotify.png" width="20px" /> */}
        <a href={artist.spotify_link} className={styles.link}>
          Spotify
        </a>
      </div>
      <button onClick={fetchRandomArtist} className={styles.button}>
        Random Artist
      </button>
    </div>
  );
};

export default Artists;
