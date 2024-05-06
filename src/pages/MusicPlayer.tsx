import { useRef, useState, useEffect } from "react";
import project from '/audio/project-utopia.ogg';
import summer from '/audio/upbeat-summer.mp3';
import stars from '/audio/meeting-the-stars.mp3';
import { FiChevronRight, FiPause, FiChevronsRight, FiChevronsLeft } from "react-icons/fi";
const songs = [{ title: 'First Song', song: project }, { title: 'Second Song', song: summer }, { title: 'Third Song', song: stars }]

export default function MusicPlayer() {
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [progess, setProgress] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play()
    } else {
      audioRef.current?.pause()
    }
  }, [currentSong])

  const handlePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause()
    } else {
      audioRef.current?.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleNext = () => {
    const currentIndex = songs.findIndex(song => song.title === currentSong.title)
    if (currentIndex === songs.length - 1) {
      setCurrentSong(songs[0])
    } else {
      setCurrentSong(songs[currentIndex + 1])
    }
    setProgress(0)
  }

  const handleBefore = () => {
    const currentIndex = songs.findIndex(song => song.title === currentSong.title)
    if (currentIndex === 0) {
      setCurrentSong(songs[songs.length - 1])
    } else {
      setCurrentSong(songs[currentIndex - 1])
    }
    setProgress(0)
  }

  const handleTimeUpdate = () => {
    if (audioRef.current?.currentTime && audioRef.current?.duration) {
      const newProgress = (audioRef.current?.currentTime / audioRef.current?.duration) * 100
      setProgress(newProgress)
    }
  }

  const handleProgress = (event: React.MouseEvent<HTMLElement>) => {
    if (progressRef.current?.clientWidth && audioRef.current?.duration) {
      const time = (event.nativeEvent.offsetX / progressRef.current?.clientWidth) * audioRef.current?.duration
      if (audioRef.current?.currentTime) {
        audioRef.current.currentTime = time
      }
    }
  }

  return (
    <div className="text-4xl font-bold border px-20 py-5 rounded-full w-5/12">
      <audio src={currentSong.song} ref={audioRef} onTimeUpdate={handleTimeUpdate}></audio>
      <p className="mb-3">{currentSong.title}</p>
      <div className="w-100 h-1.5 bg-gray-300 mb-3 rounded cursor-pointer" ref={progressRef} onClick={handleProgress}>
        <div className="h-1.5 bg-green-300 mb-3 rounded relative" style={{ width: `${progess}%` }}>
          <div className="absolute w-3 h-3 rounded-full  bg-green-500 top-1/2 -right-1.5 -translate-y-1/2">
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="w-16 h-16 text-gray-500 rounded-full border flex justify-center items-center" onClick={handleBefore}><FiChevronsLeft /></button>
        <button className="w-16 h-16 text-gray-500 rounded-full border flex justify-center items-center mx-3" onClick={handlePlay}>{isPlaying ? <FiPause /> : <FiChevronRight />}</button>
        <button className="w-16 h-16 text-gray-500 rounded-full border flex justify-center items-center" onClick={handleNext}><FiChevronsRight /></button>
      </div>
    </div>)
}