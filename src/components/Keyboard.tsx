import { KEY_TO_NOTE } from '../global/constants'

interface KeyboardProps {
  keyboard: string;
  isPressed: boolean;
}

type NoteKey = keyof typeof KEY_TO_NOTE;

export default function Keyboard({ keyboard, isPressed }: KeyboardProps) {
  const pressedClass = isPressed ? 'bg-slate-500 text-white' : '';
  const whiteKeyClasses = `w-16 h-32 border flex ${pressedClass}`;
  const blackKeyClasses = `w-8 h-24 bg-gray-500 relative flex ${pressedClass}`;
  // NOTE
  const isBlackKey = KEY_TO_NOTE[keyboard as NoteKey].length > 1

  const content = isBlackKey ? (
    <div
      className={blackKeyClasses}
      style={{ margin: "0 -1rem" }}
    >
      <div className='mt-auto mx-auto mb-2'>{keyboard.toUpperCase()}</div>
    </div>
  ) : (
    <div className={whiteKeyClasses}><div className='mt-auto mx-auto mb-2'>{keyboard.toUpperCase()}</div></div>
  );
  return <>{content}</>;
}
