import { useState } from 'react';

function Header({ cartCount = 0 }) {
  const [hideItems, setItems] = useState("collapse navbar-collapse");
  let togglebutton = false;
  const logUserId = localStorage.getItem('RESULT');
 
  function logout() {
    localStorage.clear();
    window.location.reload();
  }

  function toggle() {
    if (togglebutton === false) {
      togglebutton = true;
      setItems("navbar-collapse");
    } else {
      togglebutton = false;
      setItems("collapse navbar-collapse");
    }
  }

  return (
    <div className="navbar bg-black navbar-expand-lg">
      <div className="container">
        <div className="navbar-brand ps-2">
          <img
            src="https://st.depositphotos.com/1004032/3530/i/950/depositphotos_35304677-stock-photo-information-technology-in-tag-cloud.jpg
            "
            width="150px"
            alt="Logo"
          />
        </div>

        <button className="navbar-toggler" onClick={toggle}>
          <span className="navbar-toggler-icon bg-white"></span>
        </button>

        <div className={hideItems}>
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <a href='/' className="nav-link text-white fs-4">Home</a>
            </li>

            <li className="nav-item ps-4">
              {logUserId === "SUCCESS" ? (
                <a href='/' onClick={logout} className="nav-link text-white fs-4">Logout</a>
              ) : (
                <a href='/Login' className="nav-link text-white fs-4">Login</a>
              )}
            </li>

            <li className="nav-item ps-4">
              <a href='/sign' className="nav-link text-white fs-4">SignUp</a>
            </li>
            <li className="nav-item ps-4">
              <a href='/UpdateProfile' className="nav-link text-white fs-4">UpdateProfile</a>
            </li>

            <li className="nav-item ps-4">
              <a href='/Products' className="nav-link text-white fs-4 position-relative">
                Products
                {cartCount > 0 && (
                  <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
                    {cartCount}
                  </span>
                )}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
