import data from './data.json';
import { useState } from 'react';
import './Counter.css';  // relative path to the CSS file



function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default Counter;
