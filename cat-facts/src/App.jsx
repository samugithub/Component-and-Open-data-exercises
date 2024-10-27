import { useState, useEffect } from 'react'
import './App.css'
import CatFact from './CatFacts';
import FetchButton from './FetchButton';

function App() {
  const [catFact, setCatFact] = useState('');

  useEffect(() => {
    fetchCatFact();
  }, []);

  const fetchCatFact = () => {
    fetch('https://catfact.ninja/fact')
      .then(res => res.json())
      .then(data => setCatFact(data.fact))
      .catch(err => console.error('Error:', err));
  };

  return (
    <div className="App">
      <h1>Cat Facts</h1>
      <CatFact fact={catFact} />
      <FetchButton onClick={fetchCatFact} />
    </div>
  );
}

export default App;