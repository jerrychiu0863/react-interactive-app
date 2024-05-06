import { useState, useEffect } from 'react'
import Square from '../components/Square'

function TicTacToe() {
  const [squares, setSquares] = useState<string[]>(Array(9).fill(''))
  const [isXTurn, setIsXTurn] = useState(true)
  const [status, setStatus] = useState('')
  const [restart, setRestart] = useState(false)

  useEffect(() => {
    if (!checkWinner(squares) && squares.every(square => square !== '')) {
      setStatus('This is draw')
      setRestart(true)
    } else if (checkWinner(squares)) {
      setStatus(`${checkWinner(squares)} is the winner`)
      setRestart(true)
    } else {
      setStatus(`${isXTurn ? 'X' : 'O'}'s turn`)
    }
  }, [squares, isXTurn])

  const handleClick = (currentSquare: number) => {
    // If square is filled, then do nothing
    if (checkWinner(squares) || squares[currentSquare]) return;
    const newSquares = squares.map((square, i) => {
      if (i === currentSquare) {
        return square = isXTurn ? 'X' : 'O'
      } else {
        return square
      }
    })
    setSquares(newSquares)
    setIsXTurn(preState => !preState)
  }

  const checkWinner = (squares: string[]) => {
    const winningPattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for (let pattern of winningPattern) {
      const [x, y, z] = pattern;
      if (squares[x] && squares[x] === squares[y] && squares[x] === squares[z]) {
        return squares[x]
      }
    }
    return null
  }

  const handleRestart = () => {
    setSquares(Array(9).fill(''))
    setIsXTurn(true)
    setRestart(false)
  }

  return (
    <>
      <div className='w-60'>
        <div className='flex flex-wrap'>
          {Array(9).fill('').map((_, i) => {
            return <Square key={i} value={squares[i]} onClick={() => handleClick(i)} />
          })}

        </div>
        <div className='flex items-center justify-between mt-3'>
          <p className='mb-0'>{status}</p>
          {restart && <div><button className='bg-gray-300 py-1 px-4 rounded' onClick={handleRestart}>Restart</button></div>}
        </div>

      </div>
    </>
  )
}

export default TicTacToe
