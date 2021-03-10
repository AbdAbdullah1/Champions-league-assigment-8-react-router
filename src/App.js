import { useEffect, useState } from 'react';
import './App.css';
import League from './components/League/League';

function App() {
const [leagues, setLeagues] =useState({});

  useEffect(()=> {
    fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
    .then(res => res.json())
    .then(data => setLeagues(data))
    console.log(leagues.leagues);
  }, [])
  return (
    <div className="App">
      <h1>Leagues: {leagues.leagues.length}  </h1>
     <League></League>
    </div>
  );
}

export default App;
