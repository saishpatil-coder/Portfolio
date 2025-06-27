import React, { useState } from 'react';
import './Calculator.css';

export default function Calculator() {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const clearAll = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const inputDigit = (digit) => {
    if (waitingForOperand) {
      setDisplay(String(digit));
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? String(digit) : display + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
      return;
    }

    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const performOperation = (nextOperation) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue, secondValue, operation) => {
    switch (operation) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '×':
        return firstValue * secondValue;
      case '÷':
        return firstValue / secondValue;
      case '%':
        return firstValue % secondValue;
      default:
        return secondValue;
    }
  };

  const handleEquals = () => {
    if (!previousValue || !operation) return;

    const inputValue = parseFloat(display);
    const newValue = calculate(previousValue, inputValue, operation);

    setDisplay(String(newValue));
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(true);
  };

  const handlePlusMinus = () => {
    setDisplay(display.charAt(0) === '-' ? display.substr(1) : '-' + display);
  };

  const handlePercent = () => {
    const value = parseFloat(display);
    const newValue = value / 100;
    setDisplay(String(newValue));
  };

  const formatDisplay = (value) => {
    const number = parseFloat(value);
    if (isNaN(number)) return '0';
    
    const maxDigits = 12;
    if (value.length > maxDigits) {
      return number.toExponential(maxDigits - 6);
    }
    return value;
  };

  return (
    <div className="calculator-container">
      {/* Header */}
      <div className="calculator-header">
        <h1 className="calculator-title">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            Calculator
          </span>
        </h1>
        <p className="calculator-subtitle">Modern calculator with sleek design</p>
      </div>

      {/* Calculator Body */}
      <div className="calculator">
        {/* Display */}
        <div className="calculator-display">
          <div className="calculator-expression">
            {previousValue !== null && operation && (
              <span className="expression-text">
                {previousValue} {operation}
              </span>
            )}
          </div>
          <div className="calculator-screen">
            {formatDisplay(display)}
          </div>
        </div>

        {/* Buttons */}
        <div className="calculator-buttons">
          {/* Row 1 */}
          <button 
            className="calculator-btn function-btn" 
            onClick={clearAll}
          >
            AC
          </button>
          <button 
            className="calculator-btn function-btn" 
            onClick={handlePlusMinus}
          >
            ±
          </button>
          <button 
            className="calculator-btn function-btn" 
            onClick={handlePercent}
          >
            %
          </button>
          <button 
            className={`calculator-btn operator-btn ${operation === '÷' ? 'active' : ''}`}
            onClick={() => performOperation('÷')}
          >
            ÷
          </button>

          {/* Row 2 */}
          <button 
            className="calculator-btn number-btn" 
            onClick={() => inputDigit(7)}
          >
            7
          </button>
          <button 
            className="calculator-btn number-btn" 
            onClick={() => inputDigit(8)}
          >
            8
          </button>
          <button 
            className="calculator-btn number-btn" 
            onClick={() => inputDigit(9)}
          >
            9
          </button>
          <button 
            className={`calculator-btn operator-btn ${operation === '×' ? 'active' : ''}`}
            onClick={() => performOperation('×')}
          >
            ×
          </button>

          {/* Row 3 */}
          <button 
            className="calculator-btn number-btn" 
            onClick={() => inputDigit(4)}
          >
            4
          </button>
          <button 
            className="calculator-btn number-btn" 
            onClick={() => inputDigit(5)}
          >
            5
          </button>
          <button 
            className="calculator-btn number-btn" 
            onClick={() => inputDigit(6)}
          >
            6
          </button>
          <button 
            className={`calculator-btn operator-btn ${operation === '-' ? 'active' : ''}`}
            onClick={() => performOperation('-')}
          >
            -
          </button>

          {/* Row 4 */}
          <button 
            className="calculator-btn number-btn" 
            onClick={() => inputDigit(1)}
          >
            1
          </button>
          <button 
            className="calculator-btn number-btn" 
            onClick={() => inputDigit(2)}
          >
            2
          </button>
          <button 
            className="calculator-btn number-btn" 
            onClick={() => inputDigit(3)}
          >
            3
          </button>
          <button 
            className={`calculator-btn operator-btn ${operation === '+' ? 'active' : ''}`}
            onClick={() => performOperation('+')}
          >
            +
          </button>

          {/* Row 5 */}
          <button 
            className="calculator-btn number-btn zero-btn" 
            onClick={() => inputDigit(0)}
          >
            0
          </button>
          <button 
            className="calculator-btn number-btn" 
            onClick={inputDecimal}
          >
            .
          </button>
          <button 
            className="calculator-btn equals-btn" 
            onClick={handleEquals}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
} 