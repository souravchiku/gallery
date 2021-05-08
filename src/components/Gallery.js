import { useState } from "react";
// import "./styles.css";

// MUfREdjMXICzYNvBQHVaY5yBqvmLGZe3o-P5NUfHqck
export default function Gallery() {
  const key = "MUfREdjMXICzYNvBQHVaY5yBqvmLGZe3o-P5NUfHqck";
  const fetchImg = (e) => {
    e.preventDefault();
    fetch(
      `https://api.unsplash.com/search/photos?client_id=${key}&query=${value}&orientation=squarish`
    )
      .then((res) => res.json())
      .then((data) => {
        setResults(data.results);
      });
  };
  const [value, setValue] = useState("");
  const [results, setResults] = useState([]);
  return (
    <div className="App">
      <nav>
        <div className="nav-wrapper #eeeeee grey lighten-3">
          <form onSubmit={(e) => fetchImg(e)}>
            <div className="input-field">
              <input
                id="search"
                type="search"
                onChange={(e) => setValue(e.target.value)}
                placeholder="Search Any Image"
              />

              <i className="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
      {/* <div className="mydiv"> */}

      {/* <span>Search: </span> */}
      {/* <input type="text" 
        style={{width:'60%'}}
        placeholder="search" 
        value={value} 
        onChange={(e)=>setValue(e.target.value)} /> */}
      {/* <button onClick={()=>fetchImg()}>Search</button> */}

      {/* </div> */}
      <div className="gallery">
        {results.map((item) => {
          return (
            <img className="image" key={item.id} src={item.urls.regular} />
          );
        })}
      </div>
    </div>
  );
}
