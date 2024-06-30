import React from "react";
import { useState, useEffect } from "react";
import styles from "../components/music.module.css";

const Add = () => {
  const [newArtist, setNewArtist] = useState({
    name: "",
    bio: "",
    genre: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setNewArtist({
      ...newArtist,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://music-api-8rda.onrender.com/artists",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newArtist),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add new artist!");
      }

      setNewArtist({
        name: "",
        bio: "",
        genre: "",
      });

      setMessage("Artist added successfully!");
    } catch (err) {
      console.log("Error adding artist!", err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.formtitle}>ADD AN ARTIST</h2>
      <label className={styles.label}>
        Name:
        <input
          type="text"
          name="name"
          value={newArtist.name}
          onChange={handleChange}
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        Bio:
        <input
          type="text"
          name="bio"
          value={newArtist.bio}
          onChange={handleChange}
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        Genre:
        <input
          type="text"
          name="genre"
          value={newArtist.genre}
          onChange={handleChange}
          className={styles.input}
        />
      </label>
      <button type="submit" className={styles.button}>
        Add Artist
      </button>
      <p className={styles.message}>{message}</p>
    </form>
  );
};

export default Add;
