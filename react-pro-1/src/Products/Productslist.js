import Header from '../SHARED/Header';
import Footer from '../SHARED/Footer';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Productslist() {
  const [Products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6); // For Load More
  const [cartCount, setCartCount] = useState(0);
  const [toastMsg, setToastMsg] = useState('');
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    async function getProductList() {
      const apiresponse = await axios.get("https://dummyjson.com/products");
      const data = apiresponse.data.products.map(product => {
        product.isfav = false;
        return product;
      });
      setProducts(data);
    }
    getProductList();
  }, []);

  // Show toast message briefly
  function showToast(message) {
    setToastMsg(message);
    setTimeout(() => setToastMsg(''), 2000);
  }

  function addToCart(product) {
    const tempData = Products.map(p => {
      if (p.id === product.id) {
        p.isfav = !p.isfav;
        showToast(p.isfav ? 'Added to cart' : 'Removed from cart');
      }
      return p;
    });
    setProducts(tempData);
    setCartCount(tempData.filter(p => p.isfav).length);
  }

  const filteredProducts = Products.filter(p =>
    p.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="container">
      {/* Header with cart count */}
      <div className="row">
        <Header cartCount={cartCount} />
      </div>

      {/* Toast Message */}
      {toastMsg && (
        <div className="alert alert-success text-center mt-2" role="alert">
          {toastMsg}
        </div>
      )}

      {/* Search Input */}
      <div className="row my-3">
        <div className="col-md-6 offset-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search products..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </div>

      {/* Product Cards */}
      <div className="row">
        {filteredProducts.slice(0, visibleCount).map(product => (
          <div className="col-12 col-sm-6 col-md-4 mb-4" key={product.id}>
            <div className="card shadow h-100">
              <img
                src={product.thumbnail}
                className="card-img-top img-fluid"
                style={{ objectFit: "cover", height: "200px" }}
                alt={product.title}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text" style={{ flexGrow: 1 }}>{product.description}</p>
                <h6><b><i className="bi bi-currency-rupee"></i> {product.price}</b></h6>
                <button
                  className={`btn ${product.isfav ? 'btn-danger' : 'btn-outline-primary'} mt-2 d-flex align-items-center gap-2`}
                  onClick={() => addToCart(product)}
                >
                  <i className={`bi ${product.isfav ? 'bi-heart-fill' : 'bi-heart'}`}></i>
                  {product.isfav ? "Remove from Cart" : "Add to Cart"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < filteredProducts.length && (
        <div className="row">
          <div className="col text-center mb-4">
            <button
              className="btn btn-secondary"
              onClick={() => setVisibleCount(prev => prev + 6)}
            >
              Load More
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="row mt-2">
        <Footer />
      </div>
    </div>
  );
}

export { Productslist };
