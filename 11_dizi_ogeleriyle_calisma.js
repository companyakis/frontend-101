function App() {

  const kisiler = [
    {
      ad: "mustafa b",
      ulke: "turkiye",
      id: 1,
    },

    {
      ad: "bilge d",
      ulke: "almanya",
      id: 2,
    },

    {
      ad: "peyami s",
      ulke: "tataristan",
      id: 3,
    },
  ];

  return (
    <div className="App">
      {kisiler.map((kisi) => (
        <div key={kisi.id}>
          <h2>Ad: {kisi.ad} ve ülke: {kisi.ulke}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;
