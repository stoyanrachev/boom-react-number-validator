import "./App.css";
import { useState, useMemo } from "react";


function isNumber(str) {
  const checkNum = new RegExp('^[0-9\b]+$');
  if (checkNum.test(str)) {
    return true;
  } else {
    return false;
  }
}



function App() {
  const [text, setNum] = useState('');



  const checkNum = useMemo(() => isNumber(text), [text]);

  const handleChange = event => {
    setNum(event.target.value);
  };

  return (
    <div className="App">
      <div className="control has-icons-right">
        <input
          className="input is-large"
          type="text"
          placeholder="Enter number..."
          onChange={handleChange}
          value={text}
        />
        <span className="icon is-small is-right">
          <i className={checkNum ? "fas fa-check" : "fas fa-times"} />
        </span>
      </div>
    </div>
  );
}

export default App;
