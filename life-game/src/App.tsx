import React, {useState} from 'react';
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


  return (
    <div style={
      {
        display: 'grid',
        gridTemplateColumns: `repeat(${numCols}, 20px)`
      }
    }>
      {/* <h1>Life Game</h1> */}
      {
       grid.map((rows, i:number) =>
       rows.map((col, k:number) =>
         <div key={`${i}-${k}`} style={{
           width: 20,
           height: 20,
           backgroundColor: grid[i][k] ? 'pink' : undefined,
           border: 'solid 1px black'
         }} />
       )
     )
     
      }

    </div>
  )
}

export default App;
