import React, {useState} from 'react';

//sayaç uygulaması react için "hello milky way" diyebiliriz. yani jsx'i temel olarak bilen bir kişi, sayaç yapabilir!
//tasarım kaygısı burada olmamalı

const Sayac = () => {
  const [sayac, setSayac] = useState(0);
  
  const sayacArttir = () => {
    setSayac(sayac + 1)
  };
  
  const sayacAzalt = () => {
    setSayac(sayac - 1)
  };
  return (
    <div>
      <h5>Sayaç yaptık:)</h5>
      <button onClick={sayacArttir}>Sayaç Arttır</button>
      <p>Sayaç değeri: {sayac}</p>
      <button onClick={sayacAzalt}>Sayaç Azalt</button>
    </div>
  ); 
};

export default Sayac;
