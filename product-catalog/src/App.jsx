import { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import Filters from './components/Filters';
import SearchBar from './components/SearchBar';
import SortDropdown from './components/SortDropdown';
import LaptopIMG from './assets/laptop_realistic.jpg';
import TshirtIMG from './assets/Tshirt.jpg';
import './App.css';

// Sample product data
const productsData = [
  {
    id: 1,
    name: "Laptop",
    price: 999,
    category: "Electronics",
    image_url: LaptopIMG
  },
  {
    id: 2,
    name: "T-shirt",
    price: 20,
    category: "Clothing",
    image_url: TshirtIMG
  },
  {
    id: 3,
    name: "Smartphone",
    price: 699,
    category: "Electronics",
    image_url: "/api/placeholder/150/150"
  },
  {
    id: 4,
    name: "Novel",
    price: 15,
    category: "Books",
    image_url: "/api/placeholder/150/150"
  },
  {
    id: 5,
    name: "Headphones",
    price: 149,
    category: "Electronics",
    image_url: "/api/placeholder/150/150"
  },
  {
    id: 6,
    name: "Jeans",
    price: 45,
    category: "Clothing",
    image_url: "/api/placeholder/150/150"
  },
  {
    id: 7,
    name: "Cookbook",
    price: 25,
    category: "Books",
    image_url: "/api/placeholder/150/150"
  },
  {
    id: 8,
    name: "Tablet",
    price: 399,
    category: "Electronics",
    image_url: "/api/placeholder/150/150"
  },
  {
    id: 9,
    name: "Hoodie",
    price: 35,
    category: "Clothing",
    image_url: "/api/placeholder/150/150"
  },
  {
    id: 10,
    name: "Smart Watch",
    price: 199,
    category: "Electronics",
    image_url: "/api/placeholder/150/150"
  },
  {
    id: 11,
    name: "Biography",
    price: 22,
    category: "Books",
    image_url: "/api/placeholder/150/150"
  },
  {
    id: 12,
    name: "Dress",
    price: 50,
    category: "Clothing",
    image_url: "/api/placeholder/150/150"
  }
];

function App() {
  const [products, setProducts] = useState(productsData);
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortBy, setSortBy] = useState('none');

  // Get unique categories for filter options
  const categories = ['All', ...new Set(products.map(product => product.category))];

  // Find min and max prices for the price range filter
  const minPrice = Math.min(...products.map(product => product.price));
  const maxPrice = Math.max(...products.map(product => product.price));

  useEffect(() => {
    // Apply filters and sorting
    let result = [...products];

    // Filter by category
    if (selectedCategory !== 'All') {
      result = result.filter(product => product.category === selectedCategory);
    }

    // Filter by price range
    result = result.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Filter by search term
    if (searchTerm) {
      result = result.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply sorting
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name-asc') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'name-desc') {
      result.sort((a, b) => b.name.localeCompare(a.name));
    }

    setFilteredProducts(result);
  }, [products, selectedCategory, priceRange, searchTerm, sortBy]);

  return (
    <div className="container">
      <h1>Product Catalog</h1>
      
      <div className="controls">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
      </div>
      
      <div className="content">
        <Filters 
          categories={categories}
          selectedCategory={selectedCategory} 
          setSelectedCategory={setSelectedCategory}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          minPrice={minPrice}
          maxPrice={maxPrice}
        />
        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
}

export default App;