
import './App.css';
import Card from './card';
import { useState } from 'react';

function App() {

  const [arr, setArr] = useState([{ title: "abc", price: 100, image: "https://picsum.photos/200" }, { title: "abc", price: 100, image: "https://picsum.photos/200" }, { title: "abc", price: 100, image: "https://picsum.photos/200" }, { title: "abc", price: 100, image: "https://picsum.photos/200" }, { title: "abc", price: 100, image: "https://picsum.photos/200" }]);
  let addToCart = () => {
    console.log("Add to Cart");
  };
  return (
    <div className="App">
      <header className="App-header">

        {
          arr.map((e) => {
            return (<Card title={e.title} price={e.price} img={e.image} action={addToCart} />)
          })
        }
      </header>
    </div>
  );
}

export default App;
