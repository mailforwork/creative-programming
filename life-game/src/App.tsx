import React, { useState } from 'react';
import produce from 'immer';

// import logo from './logo.svg';
import './App.css';

const numRows = 50;
const numCols = 50;

const App: React.FC = () => {
  const [grid, setGrid] = useState(() => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => 0));
    }

    return rows;
  })

  const [running, setRunning] = useState(false);

  return (
    <>
      <button onClick={() => { setRunning(!running); }}>
        {running ? "Stop" : "Start"}
      </button>

      <div style={
        {
          display: 'grid',
          gridTemplateColumns: `repeat(${numCols}, 20px)`
        }
      }>
        {/* <h1>Life Game</h1> */}
        {
          grid.map((rows, i) =>
            rows.map((col, k) =>
              <div key={`${i}-${k}`}

                onClick={() => {
                  const newGrid = produce(grid, gridCopy => { gridCopy[i][k] = grid[i][k] ? 0 : 1; })
                  setGrid(newGrid);

                }}

                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: grid[i][k] ? 'pink' : undefined,
                  border: 'solid 1px black'
                }} />
            )
          )

        }

      </div>
    </>
  )
}

export default App;
