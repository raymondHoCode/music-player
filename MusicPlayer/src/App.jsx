import { MusicPlayer } from "./components/MusicPlayer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AllSongs } from "./components/AllSongs";
import { Playlists } from "./components/Playlists";

function App() {
  

  return (
  <BrowserRouter>
  <div className="app">
   {/* <navbar/>*/}
    <main className = "app-main">
      <div className="player-section">
        <MusicPlayer/>
      </div>
      <div className = "content-section">
        <Routes>
          <Route path = "/" element = {<AllSongs/>}/>
          <Route path = "/playlists" element = {<Playlists/>}/>
        </Routes>
      
      </div>
    </main>
  </div>
  </BrowserRouter>
  );
} 

export default App
