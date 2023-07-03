import React from 'react';

const ad = "Mustafa"
const soyad = "Büyükdereli"
const girisYapildi = true //false olarak da deneyelim

export function App(props) {
  return (
    <>
      <h3>
        {girisYapildi ? `Benim adım ${ad} ve soyadım ${soyad}` : "Lütfen, kullanıcı bilgilerini giriniz!"}
      </h3>
    </>
  );
}
