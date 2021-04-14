import React,{useState, useEffect} from "react";
import './App.css';
import axios from "axios";

function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=5')
    .then(res => {
     setUsers(res.data.results)
    })
  },[]) 
  return (
    <div className="App">
    {users.map(user => (
      <h1>{user.name.first}</h1>
    ))}
    </div>
  );
}

export default App;
