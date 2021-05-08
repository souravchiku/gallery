import { useEffect, useState } from "react";
// import "./styles.css";

export default function Jokes() {
  const [joke, setjoke] = useState("loading");
  const newJoke = () => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setjoke(data.value);
      });
  };
  useEffect(() => {
    newJoke();
  }, []);
  return (
    <div className="App">
      <h2> {joke}</h2>
      <button
        className="waves-effect waves-light btn-large #afb42b lime darken-2 "
        onClick={() => newJoke()}
      >
        {" "}
        Next Joke{" "}
      </button>
    </div>
  );
}
