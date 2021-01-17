function Food({ fav }) {
  return <h1>I love {fav} </h1>;
}

function App() {
  return (
    <div className="App">
      <h1>Hello!</h1>
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="samkyupsal" />
      <Food fav="chukumi" />
    </div>
  );
}

export default App;
