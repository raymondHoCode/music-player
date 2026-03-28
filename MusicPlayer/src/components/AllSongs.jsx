
import { useMusic } from "../Hooks/useMusic";
export const AllSongs = () => {

    const { allSongs, handlePlaySong } = useMusic();

    return (
    <div className="all-songs">
      <h2>All Songs ({allSongs.length})</h2>

      <div className="songs-grid">
        {allSongs.map((song, index) => (
          <div key={index} className="song-card" onClick={() => handlePlaySong(song,kkey)}>
            <div className="song-info">
              <h3 className="song-title" > {song.title}</h3>
              <p className="song-artist">{song.artist}</p>
              <span className="song-duration" >{song.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};