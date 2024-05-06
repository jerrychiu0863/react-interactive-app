interface SquareProps {
  value: string;
  onClick: () => void;
}

export default function Square({ value, onClick }: SquareProps) {
  return (
    <button
      onClick={onClick}
      className="border border-gray-300 h-20 bg-transparent rounded-none text-xl w-20">
      {value}
    </button>
  )
}