import React from 'react';
import './Home.css'; // Import Home specific styles

const Home = () => {
  return (
    <div className="home-container">
      <div className="logo">
        <h1>JNU Smart Shop</h1>
      </div>

      <header className="header">
        <nav className="main-nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/ProductList">Products</a></li>
            <li><a href="/cart">Cart</a></li>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
            <li> <a href="/register" className="register-link">Register</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2 className="hero-title">Welcome to JNU Smart Shop</h2>
          <p className="hero-description">
            Your one-stop shop for all smart and trendy products!
          </p>
          <a href="/ProductList" className="btn-shop-now">Shop Now</a>
        </div>
      </section>


      {/* Featured Products */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-list">
          <div className="product-card">
            <img src="./images/jnu-t-shirt.webp" alt="JNU Shirt" />
            <h3>JNU T-Shirt</h3>
            <p>Show your JNU pride in style.</p>
            <p>Price: ₹499</p>
            <button className="btn-add-to-cart">Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="./images/notebook.png" alt="Notebook" />
            <h3>Notebook</h3>
            <p>Perfect for your notes and ideas.</p>
            <p>Price: ₹149</p>
            <button className="btn-add-to-cart">Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="./images/folder.png" alt="File Folder" />
            <h3>File Folder</h3>
            <p>Organize your documents.</p>
            <p>Price: ₹99</p>
            <button className="btn-add-to-cart">Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="./images/lapi.png" alt="Laptop Sleeve" />
            <h3>Laptop Sleeve</h3>
            <p>Protect your laptop with JNU branding.</p>
            <p>Price: ₹799</p>
            <button className="btn-add-to-cart">Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="/images/pen.png" alt="Pen" />
            <h3>Pen</h3>
            <p>Write with pride.</p>
            <p>Price: ₹49</p>
            <button className="btn-add-to-cart">Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="./images/gym.png" alt="Gym Bag" />
            <h3>Gym Bag</h3>
            <p>Carry your fitness gear in style.</p>
            <p>Price: ₹999</p>
            <button className="btn-add-to-cart">Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="/images/mask.png" alt="Mask" />
            <h3>Mask</h3>
            <p>Guard your health, effortlessly.</p>
            <p>Price: ₹49</p>
            <button className="btn-add-to-cart">Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="./images/jnu-mug.webp" alt="Mug" />
            <h3>Custom Mug</h3>
            <p>Enjoy your beverages with JNU pride.</p>
            <p>Price: ₹349</p>
            <button className="btn-add-to-cart">Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="./images/pendrive.png" alt="USB Drive" />
            <h3>USB Drive</h3>
            <p>Carry your world in your pocket.</p>
            <p>Price: ₹599</p>
            <button className="btn-add-to-cart">Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="./images/photobook.jpg" alt="Campus Photobook" />
            <h3>Campus Photobook</h3>
            <p>Memories from your time at JNU.</p>
            <p>Price: ₹1,699</p>
            <button className="btn-add-to-cart">Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="./images/pillow.png" alt="Pillow" />
            <h3>Pillow</h3>
            <p>Comfort with your college pride.</p>
            <p>Price: ₹499</p>
            <button className="btn-add-to-cart">Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="./images/scarf.png" alt="Scarf" />
            <h3>Scarf</h3>
            <p>Wrap up in JNU colors.</p>
            <p>Price: ₹299</p>
            <button className="btn-add-to-cart">Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="./images/socks.png" alt="Socks" />
            <h3>Socks</h3>
            <p>Keep your feet warm and stylish.</p>
            <p>Price: ₹149</p>
            <button className="btn-add-to-cart">Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="./images/yoga.png" alt="Yoga Mat" />
            <h3>Yoga Mat</h3>
            <p>Practice yoga in comfort and style.</p>
            <p>Price: ₹799</p>
            <button className="btn-add-to-cart">Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="./images/jnu-cap.png" alt="Cap" />
            <h3>Cap</h3>
            <p>Stylish and comfortable caps with college pride.</p>
            <p>Price: ₹249</p>
            <button className="btn-add-to-cart">Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="./images/bottle.png" alt="Water Bottle" />
            <h3>Water Bottle</h3>
            <p>Bottle up your college spirit.</p>
            <p>Price: ₹599</p>
            <button className="btn-add-to-cart">Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="./images/jacket.png" alt="Jacket" />
            <h3>Jacket</h3>
            <p>Stay warm and stylish.</p>
            <p>Price: ₹1,499</p>
            <button className="btn-add-to-cart">Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="./images/pajama.png" alt="Pajamas" />
            <h3>Pajamas</h3>
            <p>Sleep in comfort and style.</p>
            <p>Price: ₹799</p>
            <button className="btn-add-to-cart">Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="./images/jnu-hoody.jpg" alt="Hoody" />
            <h3>Hoody</h3>
            <p>Stay warm and stylish.</p>
            <p>Price: ₹1,199</p>
            <button className="btn-add-to-cart">Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="./images/jnu-bag.png" alt="Carry Bag" />
            <h3>Carry Bag</h3>
            <p>Durable and spacious bags.</p>
            <p>Price: ₹799</p>
            <button className="btn-add-to-cart">Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="./images/planner.png" alt="Wall Planner" />
            <h3>Wall Planner</h3>
            <p>Organize your schedule beautifully.</p>
            <p>Price: ₹399</p>
            <button className="btn-add-to-cart">Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="./images/lamp.webp" alt="Desk Lamp" />
            <h3>Desk Lamp</h3>
            <p>Brighten your study sessions.</p>
            <p>Price: ₹899</p>
            <button className="btn-add-to-cart">Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="./images/keyring.png" alt="Custom Keyring" />
            <h3>Keyring</h3>
            <p>Carry a piece of JNU with you.</p>
            <p>Price: ₹99</p>
            <button className="btn-add-to-cart">Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="./images/socket.png" alt="PopSocket" />
            <h3>PopSocket</h3>
            <p>Comfort and style for your phone.</p>
            <p>Price: ₹199</p>
            <button className="btn-add-to-cart">Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="./images/shaker.png" alt="Shaker" />
            <h3>Shaker</h3>
            <p>Stay hydrated on the go.</p>
            <p>Price: ₹299</p>
            <button className="btn-add-to-cart">Add to Cart</button>
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="shop-categories">
        <h2>Shop by Categories</h2>
        <div className="categories">
          <div className="category-card">
            <img src="./images/stationery.png" alt="Stationery" />
            <p>Stationery</p>
          </div>
          <div className="category-card">
            <img src="./images/decor.webp" alt="Home Decor" />
            <p>Home Decor</p>
          </div>
          <div className="category-card">
            <img src="./images/desklamp.jpg" alt="Desk Lamps" />
            <p>Desk Lamps</p>
          </div>
          <div className="category-card">
            <img src="./images/toy.jpg" alt="Toys" />
            <p>Puzzles</p>
          </div>
          <div className="category-card">
            <img src="./images/cust.jpg" alt="Customized Gifts" />
            <p>Customized Gifts</p>
          </div>
          <div className="category-card">
            <img src="./images/bags.png" alt="Bags" />
            <p>Bags</p>
          </div>
          <div className="category-card">
            <img src="./images/tech.jpg" alt="Tech Accessories" />
            <p>Tech Accessories</p>
          </div>
          <div className="category-card">
            <img src="./images/fitness.jpg" alt="Fitness" />
            <p>Fitness</p>
          </div>
          <div className="category-card">
            <img src="./images/cloths.png" alt="Clothing" />
            <p>Clothing</p>
          </div>
          <div className="category-card">
            <img src="./images/photos.jpg" alt="Campus Photobook" />
            <p>Campus Photobook</p>
          </div>
          <div className="category-card">
            <img src="./images/bottle.png" alt="Accessories" />
            <p>Daily Essentials</p>
          </div>
          <div className="category-card">
            <img src="./images/sheets.avif" alt="Pillows with Logo" />
            <p>Pillowcases & Sheets</p>
          </div>

        </div>
      </section>


      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2024 JNU Smart Shop | All rights reserved.</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/kt06?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LinkedIn</a>
          <a href="https://twitter.com">GitHub</a>
          <a href="https://instagram.com">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
