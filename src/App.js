import "./App.css";
import { useState, useMemo } from "react";


function isNumber(str) {
  const re = /^[0-9\b]+$/;
  if (!re.test(str)) {
    return false;
  }

  return !isNaN(str);
}

function App() {
  const [input, setNum] = useState('');
  const [icon, setIcon] = useState('fa-times');


  const calculation = useMemo(() => isNumber(input), [input]);

  const handleChange = event => {
    setNum(event.target.value);

    if (isNumber(event.target.value)) {
      setIcon('fa-check');
    } else {
      setIcon('fa-times');
    }
  };

  return (
    <div className="App">
      <div className="control has-icons-right">
        <input
          className="input is-large"
          type="text"
          placeholder="Enter number..."
          onChange={handleChange}
          value={input}
        />
        <span className="icon is-small is-right">
          <i className={"fas " + icon} />
        </span>
      </div>
    </div>
  );
}

export default App;
