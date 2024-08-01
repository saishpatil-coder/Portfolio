import React, { useState } from 'react';
import impstyle from "../Main.module.css";

export default function Sudoku() {
    const initialGrid = [
        [5, 3, 0, 0, 7, 0, 0, 0, 0],
        [6, 0, 0, 1, 9, 5, 0, 0, 0],
        [0, 9, 8, 0, 0, 0, 0, 6, 0],
        [8, 0, 0, 0, 6, 0, 0, 0, 3],
        [4, 0, 0, 8, 0, 3, 0, 0, 1],
        [7, 0, 0, 0, 2, 0, 0, 0, 6],
        [0, 6, 0, 0, 0, 0, 2, 8, 0],
        [0, 0, 0, 4, 1, 9, 0, 0, 5],
        [0, 0, 0, 0, 8, 0, 0, 7, 9]
    ];

    const [grid, setGrid] = useState(initialGrid);
    const [invalidCells, setInvalidCells] = useState(new Set()); // Track invalid cells

    const isSafe = (sudoku, row, col, digit) => {
        for (let i = 0; i < 9; i++) {
            if (sudoku[row][i] === digit || sudoku[i][col] === digit) {
                return false;
            }
        }
        const startRow = Math.floor(row / 3) * 3;
        const startCol = Math.floor(col / 3) * 3;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (sudoku[startRow + i][startCol + j] === digit) {
                    return false;
                }
            }
        }
        return true;
    };
    const handleChange = (rowIndex, colIndex, value) => {
        let numValue = parseInt(value) || 0;
        numValue = numValue > 9 ? numValue % 10 : numValue;
    
        // Create a new grid
        const newGrid = grid.map((row, rIdx) =>
            row.map((col, cIdx) => (rIdx === rowIndex && cIdx === colIndex ? numValue : col))
        );
    
        // Check if the new value is valid
        if (!isSafe(newGrid, rowIndex, colIndex, numValue)) {
            // Add to invalid cells if not safe
            setInvalidCells(prev => new Set([...prev, `${rowIndex},${colIndex}`]));
        } else {
            // Remove from invalid cells if valid
            setInvalidCells(prev => new Set([...prev].filter(cell => cell !== `${rowIndex},${colIndex}`)));
        }
    
        // Update grid
        setGrid(newGrid);
    };
    

    return (
        <div className={impstyle['sudoku-container']}>
            <div className={impstyle.boxes}>
            {grid.flat().map((col, index) => {
    const rowIndex = Math.floor(index / 9);
    const colIndex = index % 9;
    const isInvalid = invalidCells.has(`${rowIndex},${colIndex}`);
    return (
        <input
            key={index}
            value={col !== 0 ? col : ''}
            className={`${impstyle.inp} ${isInvalid ? impstyle.invalid : ''}`}
            type="number"
            onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
            max="9"
            min="1"
        />
    );
})}

            </div>
        </div>
    );
}
