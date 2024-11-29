import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

const products = [
  { id: 1, image: './images/jnu-hoody.jpg', name: 'Hoodie', description: 'Stay cozy with our JNU hoodies.', price: 1199 },
  { id: 2, image: './images/sheets.avif', name: 'Sheet', description: 'Premium sheets for cozy living.', price: 2149 },
  { id: 3, image: './images/jacket.png', name: 'Jacket', description: 'Keep warm with our premium JNU jackets.', price: 1499 },
  { id: 4, image: './images/pajama.png', name: 'Pajamas', description: 'Sleep in ultimate comfort.', price: 799 },
  { id: 5, image: './images/bottle.png', name: 'Water Bottle', description: 'Eco-friendly water bottle with JNU branding.', price: 599 },
  { id: 6, image: './images/shaker.png', name: 'Shaker', description: 'Stay hydrated with this sleek JNU shaker.', price: 299 },
  { id: 7, image: './images/phonecases.png', name: 'Phone Case', description: 'Protect your phone with JNU-themed cases.', price: 249 },
  { id: 8, image: './images/jnu-bag.png', name: 'Carry Bag', description: 'Perfect for all-purpose carrying needs.', price: 799 },
  { id: 9, image: './images/folder.png', name: 'File Folder', description: 'Your files, your pride, your JNU.', price: 99 },
  { id: 10, image: './images/notebook.png', name: 'Notebook', description: 'JNU custom notebook for your notes.', price: 149 },
  { id: 11, image: './images/pen.png', name: 'Pen', description: 'Write with a touch of JNU pride.', price: 49 },
  { id: 12, image: './images/planner.png', name: 'Wall Planner', description: 'Plan your schedule with style.', price: 399 },
  { id: 13, image: './images/yoga.png', name: 'Yoga Mat', description: 'Your perfect mat for a peaceful practice.', price: 799 },
  { id: 14, image: './images/gym.png', name: 'Gym Bag', description: 'Your ultimate fitness companion—spacious and durable.', price: 999 },
  { id: 15, image: './images/lapi.png', name: 'Laptop Sleeve', description: 'Carry your laptop in style.', price: 799 },
  { id: 16, image: './images/college-bag.webp', name: 'College Bag', description: 'Durable and stylish JNU-branded bags.', price: 1049 },
  { id: 17, image: './images/mask.png', name: 'Mask', description: 'Stay safe with JNU-branded masks.', price: 49 },
  { id: 18, image: './images/pendrive.png', name: 'USB Drive', description: 'Carry your world in your pocket with our JNU-branded USB Drive!', price: 599 },
  { id: 19, image: './images/photobook.jpg', name: 'Campus Photobook', description: 'Your stories of JNU.', price: 1699 },
  { id: 20, image: './images/jnu-mug.webp', name: 'Mug', description: 'Start your day with a cup of JNU spirit.', price: 349 },
  { id: 21, image: './images/scarf.png', name: 'Scarf', description: 'Wrap yourself in JNU colors.', price: 299 },
  { id: 22, image: './images/jnu-t-shirt.webp', name: 'T-Shirt', description: 'Stylish JNU-branded T-shirts.', price: 599 },
  { id: 23, image: './images/socks.png', name: 'Socks', description: 'Warm and comfortable socks.', price: 149 },
  { id: 24, image: './images/jnu-cap.png', name: 'Cap', description: 'Block the sun, shine your spirit.', price: 249 },
  { id: 25, image: './images/pillow.png', name: 'Pillow', description: 'Comfortable and stylish pillows.', price: 499 },
  { id: 26, image: './images/lamp.webp', name: 'Desk Lamp', description: 'Brighten your workspace.', price: 1299 },
  { id: 27, image: './images/keyring.png', name: 'Keyring', description: 'Carry a piece of JNU everywhere.', price: 99 },
  { id: 28, image: './images/socket.png', name: 'PopSocket', description: 'Handy accessory for your phone.', price: 199 },
];

const ProductList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cart, setCart] = useState([]);

  const productsPerPage = 16;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Calculate total number of pages
  const totalPages = Math.ceil(products.length / productsPerPage);
  
   // Load cart from localStorage on initial render
   useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);


 
  return (
    <div>
      <header className="header">
        <nav className="main-nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/ProductList">Products</a></li>
            <li><a href="/cart">Cart</a></li>
            <li><a href="/profile">Profile</a></li>
            <li><a href='/dashboard'>Dashboard</a></li>
            <li> <a href="/register" className="register-link">Register</a></li>
          </ul>
        </nav>
      </header>
    <div className="product-listing">
      <h2>Our Products</h2>
      <div className="products">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} cart={cart} setCart={setCart} />
        ))}
      </div>

      {/* Pagination Section */}
      <div className="pagination">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={currentPage === index + 1 ? 'active-page' : ''}
            disabled={currentPage === index + 1}
            onClick={() => setCurrentPage(index + 1)}
          >
            Page {index + 1}
          </button>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ProductList;