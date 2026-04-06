
import { createContext, useState, useContext, useEffect } from "react";
export const MusicContext = createContext()

const songs = [
        {
        id: 1,
        title: "Douyin",
        artist: "Kaori",
        url: "/songs/Douyin.mp3", 
        duration: "2:16"
        },
        {
        id: 2,
        title: "1629",
        artist: "Lil Uzi Vert",
        url: "/songs/1629.mp3", 
        duration: "2:25"
        },
        {
        id: 3,
        title: "Prayer",
        artist: "Kendrick Lamar",
        url: "/songs/Prayer.mp3", 
        duration: "5:21"
        },

        {
        id: 4,
        title: "Wonderwall (Remastered)",
        artist: "Oasis",
        url: "/songs/Wonderwall (Remastered).mp3", 
        duration: "4:18"
        }
        

    ]
export const MusicProvider = ({children}) => {
    const [allSongs, setAllSongs] = useState(songs)
         const [currentTrack, setCurrentTrack] = useState(songs[0])
         const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
         const [currentTime, setCurrentTime] = useState(0)
         const [duration, setDuration] = useState(0)
         const [isPlaying, setIsPlaying] = useState(false)
         const [volume, setVolume] = useState(0)
         const [playlists, setPlaylists] = useState([])

         useEffect(() => {
            const storedPlaylists = localStorage.getItem("musicPlayerPlaylists");
            if (storedPlaylists) {
                const playlists = JSON.parse(storedPlaylists);
                setPlaylists(playlists);
            }
         }, [])
    
        useEffect(() => {

            if(playlists.length > 0){
                localStorage.setItem("musicPlayerPlaylists", JSON.stringify(playlists))
            } else{
                localStorage.removeItem("musicPlayerPlaylists");
            }
        }, [playlists])
    
    
         const handlePlaySong = (song, index) => {
            setCurrentTrack(song)
            setCurrentTrackIndex(index)
            setIsPlaying(false);
    
         };
    
         const nextTrack = () => {
             setCurrentTrackIndex((prev) => {
                const nextIndex = (prev + 1) % allSongs.length;
                setCurrentTrack(allSongs[nextIndex])
                return nextIndex
                
             });
             setIsPlaying(false);
         };
         const prevTrack = () => {
             setCurrentTrackIndex((prev) => {
                const nextIndex = prev === 0 ? allSongs.length -1 : prev -1;
                setCurrentTrack(allSongs[nextIndex])
                return nextIndex
                
             });
             setIsPlaying(false);
         };
    
         
         const formatTime = (time) => {
            if (isNaN(time) || time === undefined) return "0:00";
            const minutes = Math.floor(time / 60);
            const seconds = Math.floor(time % 60);
    
            return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    
         };

         //object
         const createPlaylist = (name) => {
            const newPlaylist = {
                id: Date.now(),
                name,
                songs: [],
            };
            setPlaylists((prev) => [...prev, newPlaylist]);


            
         }

         const deletePlaylist = (playlistId) => {
            setPlaylists((prev) => prev.filter((playlist) => playlist.id !== playlistId))
         }
    

         const addSongToPlaylist = (playlistId, song) => {
            setPlaylists((prev) =>
              prev.map((playlist) => {
                if (playlist.id === playlistId) {
                  return {...playlist, songs: [...playlist.songs, song]};
                }else{
                    return playlist;
                }
            }))
        }   
         const play = () => setIsPlaying(true);
         const pause = () => setIsPlaying(false);
    return <MusicContext.Provider value={{allSongs, 
      handlePlaySong, 
      currentTrackIndex, 
      duration, 
      currentTrack, 
      currentTime, 
      setCurrentTime, 
      formatTime, 
      setDuration,
      nextTrack,
      prevTrack,
      play,
      pause,
      isPlaying,
      volume, 
      setVolume,
      createPlaylist,
      playlists,
      addSongToPlaylist,
      setCurrentTrack,
      deletePlaylist,


    }}>{children}</MusicContext.Provider>
};


export const useMusic = () => {
    const contextValue = useContext(MusicContext)

    if (!contextValue){
        throw new Error("useMusic got to be in the music provider")
    }
    return contextValue
}