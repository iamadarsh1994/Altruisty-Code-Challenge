
import { useState, useEffect } from 'react';
import { Button } from "@material-tailwind/react";
import Product from '../pages/Product';
import Cards from './Cards';
import banner from '../assets/banner3.png'
import last from '../assets/Nearf.png'

export default function Homepage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({ category: '', priceRange: '' });
  

  const mockProducts = [
    { id: 1, name: 'Smartphone', category: 'electronics', price: 299 },
    { id: 2, name: 'Laptop', category: 'electronics', price: 799 },
    { id: 3, name: 'Shoes', category: 'fashion', price: 49 },
    { id: 4, name: 'Headphones', category: 'electronics', price: 199 },
    { id: 5, name: 'Shirt', category: 'fashion', price: 29 },
  ];

  useEffect(() => {

    setProducts(mockProducts);
    setFilteredProducts(mockProducts); 
  }, []);

  const handleFilterChange = (filter) => {
    const updatedFilters = { ...filters, [filter.name]: filter.value };
    setFilters(updatedFilters);

    let filtered = products;
    if (updatedFilters.category) {
      filtered = products.filter(product => product.category === updatedFilters.category);
    }

    if (updatedFilters.priceRange === 'low-to-high') {
      filtered = filtered.sort((a, b) => a.price - b.price);
    }

    setFilteredProducts(filtered);
  };

  const handleButtonClick = () => {
         alert("Adding to Cart!");
       };

  return (
    <div className=" min-h-screen bg-white p-8">
      {/* Left Drawer */}
      <div className="flex flex-col ">
      <main className="flex-1 container mx-auto flex">
        {/* Sidebar */}
        <aside className="w-1/4 bg-gray-100 p-6">
          <ul className="space-y-4">
            <li className="font-semibold">Women&#39;s Fashion</li>
            <li className="font-semibold">Men&#39;s Fashion</li>
            <li className="font-semibold">Electronics</li>
            <li className="font-semibold">Home & Lifestyle</li>
            <li className="font-semibold">Medicine</li>
            <li className="font-semibold">Sports & Outdoor</li>
            <li className="font-semibold">Baby&#39;s & Toys</li>
            <li className="font-semibold">Groceries & Pets</li>
            <li className="font-semibold">Health & Beauty</li>
          </ul>
        </aside>

        {/* Banner */}
        <section className="w-3/4 p-10 ">
          <div className="bg-black text-white p-14 h-96 rounded-lg flex items-center">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">iPhone 14 Series</h2>
              <p className="text-2xl">Up to 10% off Voucher</p>
              <button className="bg-white text-black px-6 py-2 mt-4 rounded-lg">Shop Now</button>
            </div>
            <div className="ml-auto">
              <img
                src="https://www.apple.com/v/iphone-14/c/images/overview/design/hero/hero_static__fw6qf4hjw76u_large.jpg"
                alt="iPhone 14"
                className="w-64"
              />
            </div>
          </div>
        </section>
      </main> </div>

      <h1 className="text-2xl font-bold mb-4 p-10 ">Product Catalog</h1>

      {/* Filter Buttons */}
      <div className="flex space-x-4 mb-4">
        <Button onClick={() => handleFilterChange({ name: 'category', value: 'electronics' })}>
          Filter by Electronics
        </Button>
        <Button onClick={() => handleFilterChange({ name: 'category', value: 'fashion' })}>
          Filter by Fashion
        </Button>
        <Button onClick={() => handleFilterChange({ name: 'priceRange', value: 'low-to-high' })}>
          Sort by Price (Low to High)
        </Button>
      </div>

      {/* //product grid */}
      <div className="grid grid-cols-3 gap-4 mb-20">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Product key={product.id} {...product} />
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    <p className="text-2xl font-bold">Best Selling Products</p>
    <div className="flex justify-center items-center">
     <div className="flex space-x-4"> 
    <Cards
      title="Smartphone2"
      description="Latest model with amazing features"
      image="image-url.jpg" 
      buttonLabel="Buy Now"
      onButtonClick={handleButtonClick}
    />
    <Cards
      title="Laptop"
      description="High-performance laptop for all your needs"
      image="image-url.jpg" 
      buttonLabel="Buy Now"
      onButtonClick={handleButtonClick}
    />
    <Cards
      title="Smartwatch2"
      description="Track your fitness with style"
      image="image-url.jpg" 
      buttonLabel="Buy Now"
      onButtonClick={handleButtonClick}
    />
     <Cards
      title="Smartwatch1"
      description="Track your fitness with style"
      image="image-url.jpg" 
      buttonLabel="Buy Now"
      onButtonClick={handleButtonClick}
    />
  </div>
</div>
<section className=" p-10 ">
          <div className="bg-black text-white p-14 h-96 rounded-lg flex items-cent ">
            <div className="space-y-4">
               <h2 className="text-4xl font-bold">Checkout the Electronics</h2>
              <p className="text-2xl">Up to 10% off Voucher</p>
              <button className="bg-white text-black px-6 py-2 mt-4 rounded-lg">Shop Now</button> 
            </div>
            <div className="ml-auto ">
              <img
                src={banner}
                alt="speaker"
                className="w-100 h-100"
              />
            </div>
          </div>
        </section>
        <div>
        <p className="text-2xl font-bold p-4">New Arrivals</p>
    <div className="flex justify-center items-center">
     <div className="flex space-x-4"> 
    <Cards
      title="Smartphone2"
      description="Latest model with amazing features"
      image="image-url.jpg" 
      buttonLabel="Buy Now"
      onButtonClick={handleButtonClick}
    />
    <Cards
      title="Laptop"
      description="High-performance laptop for all your needs"
      image="image-url.jpg" 
      buttonLabel="Buy Now"
      onButtonClick={handleButtonClick}
    />
    <Cards
      title="Smartwatch2"
      description="Track your fitness with style"
      image="image-url.jpg" 
      buttonLabel="Buy Now"
      onButtonClick={handleButtonClick}
    />
     <Cards
      title="Smartwatch1"
      description="Track your fitness with style"
      image="image-url.jpg" 
      buttonLabel="Buy Now"
      onButtonClick={handleButtonClick}
    />
  </div> 
  </div>
        </div>
        <div className='flex justify-center p-4 m-4'>
          <img src={last} alt="images"/>
        </div>
      </div>
    
  );
}


