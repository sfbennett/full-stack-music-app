import React from "react";
import { useState, useEffect } from "react";
import styles from "../components/music.module.css";

const Albums = () => {
  const [album, setAlbum] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchRandomAlbum = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://music-api-8rda.onrender.com/albums/random-album"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch random album!");
      }
      const data = await response.json();
      setAlbum(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomAlbum();
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
        <p>Album Title: {album.title}</p>
        <p>Release Date: {album.release_date}</p>
        <p>Genre: {album.genre}</p>
      </div>
      <button onClick={fetchRandomAlbum} className={styles.button}>
        Random Album
      </button>
    </div>
  );
};

export default Albums;
