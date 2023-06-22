import './App.css';
import { useState } from 'react';

function App() {
  const [bilgi, setBilgi] = useState("React öğrenmek çok mu zor?")

  return (
    <div className="App">
      <h1>UseState Bilgi Değiştirme Örneği</h1>
      <button onClick={() => setBilgi("Çabalarsanız, React öğrenmek zor değildir!")}>Önyargı Düğmesi</button>
      <p>{bilgi}</p>
    </div>
  );
}
export default App;
