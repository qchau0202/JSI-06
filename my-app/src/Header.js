import React from 'react'
    const Header = () => {
      const greeting = () => {
        alert('Welcome')
      }
      return (
        <div className="header">
          <nav>
          <div className="nav__content">
                <div className="nav__left">
                    <a href="#">
                        <h2 onClick={greeting}>New Shop</h2>
                    </a>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Woman</a></li>
                        <li><a href="#">Man</a></li>
                        <li><a href="#">Short Code</a></li>
                        <li><a href="#">Mail Us</a></li>
                    </ul>
                </div>
                <div className="nav_right">
                    <p>$0.00(0 items)</p>
                    <i class="fa fa-shopping-cart"></i>
                    <a href="#">Empty Cart</a>
                </div>
            </div>
          </nav>
        </div>
      );
    }
    
    export default Header;
