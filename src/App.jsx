import React, { useEffect, useState } from "react";

const X = "X";
const O = "O";
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const initialCells = [
  { id: 1, hold: null },
  { id: 2, hold: null },
  { id: 3, hold: null },
  { id: 4, hold: null },
  { id: 5, hold: null },
  { id: 6, hold: null },
  { id: 7, hold: null },
  { id: 8, hold: null },
  { id: 9, hold: null },
];

const App = () => {
  const [cells, setCells] = useState(initialCells);

  const [player, setPlayer] = useState(X);
  const [winner, setWinner] = useState(null);
  const [tie, setTie] = useState(false);

  useEffect(() => {
    for (let combo of winningCombos) {
      if (
        cells[combo[0]].hold === cells[combo[1]].hold &&
        cells[combo[1]].hold === cells[combo[2]].hold &&
        cells[combo[0]].hold !== null
      ) {
        setWinner(cells[combo[0]].hold);
        return;
      }
    }
  }, [cells]);

  useEffect(() => {
    if (winner) {
      setTie(false);
      return;
    }
    setTie(cells.every((cell) => cell.hold !== null));
  }, [cells, winner]);

  const handleClick = (id) => {
    if (winner) return;

    const currentCell = cells.find((cell) => cell.id === id);
    if (currentCell.hold !== null) return;

    setCells((prev) =>
      prev.map((cell) => (cell.id === id ? { ...cell, hold: player } : cell))
    );

    setPlayer((prev) => (prev === X ? O : X));
  };

  const handleReset = () => {
    setCells(initialCells);
    setPlayer(X);
    setTie(false);
    setWinner(null);
  };

  return (
    <div className="w-full h-screen flex gap-20 items-center justify-center bg-[#0F1220]">
      <div id="game-part" className="flex flex-col items-center justify-center">
        <h1 className="text-lime-300 text-6xl font-bold mb-12">TIC TAC TOE</h1>
        <div id="board" className="grid grid-cols-3 gap-5">
          {cells.map((cell) => (
            <div
              key={cell.id}
              id="cell"
              onClick={() => handleClick(cell.id)}
              className={`border-5 rounded-4xl border-[#2A2F4F] w-[120px] h-[120px] cursor-pointer hover:border-[#626db4] text-8xl flex items-center justify-center ${
                cell.hold === X ? "text-red-400" : "text-blue-400"
              }`}
            >
              {cell.hold}
            </div>
          ))}
        </div>

        <>
          <p
            className={`${
              winner || tie ? "opacity-100" : "opacity-0"
            } text-white text-4xl font-semibold mt-10`}
          >
            {winner ? `🎉 The winner is ${winner} 🎉` : `Tie!`}
          </p>
        </>

        <button
          onClick={handleReset}
          className="mt-6 text-xl px-10 py-3 bg-lime-300 rounded-xl font-bold cursor-pointer"
        >
          restart
        </button>
      </div>
    </div>
  );
};

export default App;
