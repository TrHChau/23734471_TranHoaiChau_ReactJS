import "./App.css";

function App() {
  const products = [
    "Product 1",
    "Product 2",
    "Product 3",
    "Product 4",
    "Product 5",
    "Product 6",
  ];

  return (
    <div className="container">
      {products.map((item, index) => (
        <div className="product" key={index}>
          {item}
        </div>
      ))}
    </div>
  );
}

export default App;
