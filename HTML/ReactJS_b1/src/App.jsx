import "./App.css";
import ProductCard from "./components/ProductCard/ProductCard.jsx";
function App() {
  return (
    <div className="app-container">
      <h1 style={{ textAlign: "center", margin: "40px 0" }}>Product Card</h1>
      <div className="product-gird">
        <ProductCard
          image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
          name="Đồng hồ thông minh cao cấp"
          price={8990000}
        />

        <ProductCard
          image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
          name="Giày thể thao Nike Air"
          price={3250000}
        />

        <ProductCard
          image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500"
          name="Áo thun cotton basic"
          price={249000}
        />
      </div>
    </div>
  );
}
export default App;
