import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./modules/core/components/Button";

function App() {
  const [count, setCount] = useState(0);

  const name = "Mohammad  ";

  return (
    <div>
      <p className="bg-red-400 rounded-">hello {name} </p>
      <Button variant="secondary" onClick={() => alert("Hello")}>
        Click me
      </Button>
    </div>
  );
}

export default App;
