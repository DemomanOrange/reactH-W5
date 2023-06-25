// import React, { useState } from 'react';

// function CalculatorWithColor() {
//   const [number1, setNumber1] = useState('');
//   const [number2, setNumber2] = useState('');
//   const [operation, setOperation] = useState('+');
//   const [result, setResult] = useState('');
//   const [color, setColor] = useState('');
//   const [text, setText] = useState('');

//   const handleNumberChange = (event, number) => {
//     if (number === 1) {
//       setNumber1(event.target.value);
//     } else if (number === 2) {
//       setNumber2(event.target.value);
//     }
//   };

//   const handleOperation = (selectedOperation) => {
//     setOperation(selectedOperation);
//   };

//   const handleCalculate = () => {
//     const num1 = parseFloat(number1);
//     const num2 = parseFloat(number2);

//     if (isNaN(num1) || isNaN(num2)) {
//       setResult('Invalid inputs');
//       return;
//     }

//     let res;
//     switch (operation) {
//       case '+':
//         res = num1 + num2;
//         break;
//       case '-':
//         res = num1 - num2;
//         break;
//       case '*':
//         res = num1 * num2;
//         break;
//       case '/':
//         res = num2 !== 0 ? num1 / num2 : 'Division by zero error';
//         break;
//       default:
//         return;
//     }

//     setResult(res.toString());
//   };

//   const handleColorChange = (event) => {
//     setColor(event.target.value);
//   };

//   const handleTextChange = (event) => {
//     setText(event.target.value);
//   };

//   return (
//     <div>
//       <div>
//         <input type="number" value={number1} onChange={(e) => handleNumberChange(e, 1)} />
//         <input type="number" value={number2} onChange={(e) => handleNumberChange(e, 2)} />

//         <button onClick={() => handleOperation('+')}>+</button>
//         <button onClick={() => handleOperation('-')}>-</button>
//         <button onClick={() => handleOperation('*')}>*</button>
//         <button onClick={() => handleOperation('/')}>/</button>

//         <button onClick={handleCalculate}>=</button>

//         <p>Result: {result}</p>
//       </div>

//       <div>
//         <select value={color} onChange={handleColorChange}>
//           <option value="red">красный</option>
//           <option value="green">зеленый</option>
//           <option value="blue">синий </option>
//         </select>

//         <input type="text" value={text} onChange={handleTextChange} />

//         <p style={{ color }}>{text}</p>
//       </div>
//     </div>
//   );
// }

// export default CalculatorWithColor;





import React, { useState } from 'react';
import './style.css'; 

const App = () => {
  const [count, setCount] = useState(0);
  const [limit, setLimit] = useState(10);

  const handleButtonClick = () => {
    let inputValue = parseInt(document.getElementById('inputNumber').value);

    if (!isNaN(inputValue)) {
      if (inputValue > limit) {
        inputValue = limit;
      }

      setCount(inputValue);
    }
  };

  return (
    <div>
      <input type="number" id="inputNumber" />
      <button onClick={handleButtonClick}>результат</button>
      <div className="square-container">
        {Array.from({ length: count }).map((_, index) => (
          <div key={index} className="square"></div>
        ))}
      </div>
    </div>
  );
};

export default App;
