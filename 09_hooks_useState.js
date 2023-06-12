import React, {useState} from 'react';

export default function App() {
  
  const [sayac, setSayac] = useState(0);
  
  const arttir = () => setSayac(sayac + 1);
  
  const azalt = () => setSayac(sayac - 1);
  
  return (
    <div>
        <h3>Sayaç Uygulaması</h3>
        <br />
        <button onClick={arttir}>Sayaç Arttır</button>
        <br />
        <h4>Sayacın değeri: {sayac}</h4>
        <button onClick={azalt}>Sayaç Azalt</button>
    </div>
  );
}
