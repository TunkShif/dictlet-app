import React, { useRef } from 'react'

type AudioButtonProps = {
  audioUrl: string
}

const AudioButton = (props: AudioButtonProps) => {
  let audioRef = useRef<HTMLAudioElement>(null)

  return (
    <span className="text-2xl text-gray-800 hover:text-gray-600">
      <button onClick={() => audioRef.current?.play()}>
        <i className="fas fa-play mt-2">
          <audio ref={audioRef} src={props.audioUrl}></audio>
        </i>
      </button>
    </span>
  )
}

export default AudioButton
