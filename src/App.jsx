import styles from "./App.module.css";
import Albums from "./components/Albums.jsx";
import Artists from "./components/Artists.jsx";
import AllArtists from "./components/All.jsx";
import Add from "./components/Add.jsx";

function App() {
  return (
    <>
      <div className={styles.app}>
        <h1 className={styles.title}>MUSIC APP</h1>
        <div className={styles.container}>
          <Albums />
          <Artists />
          <Add />
        </div>
      </div>
    </>
  );
}

export default App;
