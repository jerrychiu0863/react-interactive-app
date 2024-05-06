import { useState, useEffect } from 'react'
import Keyboard from '../components/Keyboard'
import { KEY_TO_NOTE, VALID_KEYS } from '../global/constants'

function Piano() {
  const [pressedKeys, setPressedKeys] = useState<string[]>([])

  useEffect(() => {
    window.addEventListener('keydown', (e) => handleKeyDown(e))

    window.addEventListener('keyup', (e) => handleKeyUp(e))

    return () => {
      window.removeEventListener('keydown', (e) => handleKeyDown(e))
      window.removeEventListener('keyup', (e) => handleKeyUp(e))
    }
  }, [])

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.repeat) return

    if (!pressedKeys.includes(e.key) && VALID_KEYS.includes(e.key)) {
      setPressedKeys(prevKeys => [...prevKeys, e.key])
    }
    playAudio(e)
  }

  const playAudio = (e: KeyboardEvent) => {
    const note = KEY_TO_NOTE[e.key as keyof typeof KEY_TO_NOTE]
    if (!note) return;
    const audioElement = document.getElementById(note) as HTMLAudioElement;
    const audio = new Audio(audioElement.src)
    audio.play()
  }

  const handleKeyUp = (e: KeyboardEvent) => {
    setPressedKeys(prevKeys => prevKeys.filter(prevkey => prevkey !== e.key))
  }

  const isPressed = (keyboard: string) => {
    return pressedKeys.includes(keyboard)
  }

  const renderAudio = VALID_KEYS.map(validKey => {
    const note = KEY_TO_NOTE[validKey as keyof typeof KEY_TO_NOTE]
    return <audio
      key={validKey}
      id={note}
      src={`audio/${note}.mp3`}>
    </audio>
  })

  const renderKeyboard = VALID_KEYS.map(keyboard => {
    return <Keyboard
      key={keyboard}
      keyboard={keyboard}
      isPressed={isPressed(keyboard)}
    />
  }
  )
  return (
    <>
      <div className='flex'>
        {renderKeyboard}
        {renderAudio}
      </div>
    </>
  )
}

export default Piano
