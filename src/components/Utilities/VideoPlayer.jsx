"use client"

import { useState } from "react"
import Youtube from "react-youtube"

const VideoPlayer = ({ youtubeId }) => {
    const [isOpen, setIsOpen] = useState(true)

    const handleVideoPlayer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const option = {
        width: "300",
        height: "250"
    }

    const Player = () => {
        return (
            <div className="fixed bottom-2 right-2">
                <button
                    onClick={handleVideoPlayer}
                    className="font-bold text-2xl text-color-utama float-right px-3 mb-1"
                >
                    X
                </button>
                <Youtube
                    videoId={youtubeId}
                    onReady={(event) => event.target.pauseVideo()}
                    opts={option}
                    onError={() => alert("Video is broken, please try another.")}
                />
            </div>
        )
    }

    const ButtonOpenPlayer = () => {
        return (
            <button
                onClick={handleVideoPlayer}
                className="uppercase font-bold p-2 rounded fixed bottom-20 right-5 w-auto bg-color-accent text-color-secondary text-xl hover:bg-color-accent hover:text-color-utama transition-all shadow-xl z-10"
            >
                Trailer
            </button>
        )
    }

    return isOpen ? <Player /> : <ButtonOpenPlayer/>
}

export default VideoPlayer
