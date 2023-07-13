import React, { useState } from 'react';

function Additionprac() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleAddition = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(`The sum is: ${sum}`);
  };

  return (
    <div>
      <label htmlFor="number1">Number 1:</label>
      <input
        type="text"
        id="number1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter a number"
      />
      <br /> 

      <label htmlFor="number2">Number 2:</label>
      <input
        type="text"
        id="number2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter a number"
      />
      <br />

      {result && <p>{result}</p>}
      <button onClick={handleAddition}>Add</button>

     
    </div>
  );
}

export default Additionprac;
