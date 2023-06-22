import './App.css';
import { useState } from 'react';

function App() {
  const [ad, setAd] = useState("burayı değiştir")

  return (
    <div className="App">
      <h1>Adını Anında Değiştir!</h1>
      <h5>Benim adım: {ad}</h5>
      <input value={ad} onChange={(e) => setAd(e.target.value)}/>
    </div>
  );
}
export default App;
