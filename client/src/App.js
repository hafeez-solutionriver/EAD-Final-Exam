import React, { useState, useEffect } from "react";
import "./App.css";
import RecipeView from "./Recipe";
function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

   return <RecipeView/>
 
}

export default App;
