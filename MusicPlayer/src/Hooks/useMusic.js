
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
     const [allSongs, setAllSongs] = useState([songs])
     const [currentTrack, setCurrentTrack] = useState([null])
     const [currentTrackIndex, setCurrentTrackIndex] = useState([0])
     const handlePlaySong = (song, index) => {
        setCurrentTrack(song)
        setCurrentTrackIndex(index)
        

     }
     return {allSongs}


}