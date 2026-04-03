
import { useState } from "react"


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
        }

    ]
    export const useMusic = () => {
     const [allSongs, setAllSongs] = useState(songs)
     const [currentTrack, setCurrentTrack] = useState(songs[0])
     const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
     const [currentTime, setCurrentTime] = useState(0)
     const [duration, setDuration] = useState(0)
     const [isPlaying, setIsPlaying] = useState(false)
     const handlePlaySong = (song, index) => {
        setCurrentTrack(song)
        setCurrentTrackIndex(index)
        

     }

     const nextTrack = () => {
         setCurrentTrackIndex((prev) => {
            const nextIndex = (prev + 1) % allSongs.length;
            setCurrentTrack(allSongs[nextIndex])
            return nextIndex
            
         });
         
     }
     const prevTrack = () => {
         setCurrentTrackIndex((prev) => {
            const nextIndex = prev === 0 ? allSongs.length -1 : prev -1;
            setCurrentTrack(allSongs[nextIndex])
            return nextIndex
            
         });
         
     }

     
     const formatTime = (time) => {
        if (isNaN(time) || time === undefined) return "0:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);

        return `${minutes}:${seconds.toString().padStart(2, "0")}`;

     };

     const play = () => setIsPlaying(true);
     const pause = () => setIsPlaying(false);

     return {allSongs, 
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
      isPlaying,}


}