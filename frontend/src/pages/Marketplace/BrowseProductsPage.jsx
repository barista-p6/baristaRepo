import React, { useState, useEffect } from 'react';
import { useCart } from 'react-use-cart';
import axios from 'axios';
import SearchBar from './SearchBar';
import FilterBar from './CoffeeFilter';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import EspMachineLoader from '../../components/leaders/esprMachine';

// import finalImage from "../../assets/glasses-bg3.png";
const BrowseProducts = () => {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState('coffees');
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedStyles, setSelectedStyles] = useState([]);
    const { addItem } = useCart();

    const fetchUrl =
        category === 'coffees'
            ? 'http://localhost:3000/api/allBeverages'
            : 'http://localhost:3000/api/Allproducts';

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const response = await axios.get(fetchUrl);
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [category]);

    useEffect(() => {
        let updatedProducts = products.filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        if (selectedStyles.length > 0) {
            updatedProducts = updatedProducts.filter((product) =>
                selectedStyles.includes(product.style)
            );
        }
        setFilteredProducts(updatedProducts);
    }, [searchTerm, selectedStyles, products]);

    const addToCart = (id) => {

        console.log(`Adding product with ID ${id} to cart`);
    };



    const handleAddToCart = (product) => {
        if (product._id) {
            addItem({
                id: product._id,
                name: product.name,
                price: product.price,
            });
            console.log(`add ${product._id}, ${product.name} to the cart`)
        } else {
            console.error("Product ID is missing.");
        }
    };



    const viewDetails = (id) => {
        console.log(`Viewing details for product with ID ${id}`);
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-white p-8 font-serif">
                <div className="container mx-auto">
                    {/* <img src={finalImage} alt="Hero background" className="absolute inset-0  object-cover opacity-50" /> */}

                    <h1 className="text-4xl font-bold text-center text-black mb-8">
                        {category === 'coffees' ? 'Our Coffees' : 'Delicious Syrups'}
                    </h1>
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/4 p-6 bg-[#F6F2EF] rounded-lg shadow-lg">
                            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                            <h2 className="text-2xl font-semibold mt-6 mb-4 text-black">Category</h2>
                            <div className="space-y-3">
                                <button
                                    className={`w-full py-3 px-6 rounded-lg transition ${category === 'coffees'
                                        ? 'bg-[#E1BA94] text-white'
                                        : 'bg-gray-200 text-gray-700'
                                        }`}
                                    onClick={() => setCategory('coffees')}
                                >
                                    Coffees
                                </button>
                                <button
                                    className={`w-full py-3 px-6 rounded-lg transition ${category === 'syrups'
                                        ? 'bg-[#E1BA94] text-white'
                                        : 'bg-gray-200 text-gray-700'
                                        }`}
                                    onClick={() => setCategory('syrups')}
                                >
                                    Syrups
                                </button>
                            </div>
                            <h2 className="text-2xl font-semibold mt-8 mb-4 text-black">Filter by Style</h2>
                            {category == "coffees" ? <FilterBar onStyleChange={setSelectedStyles} /> : <p>Syrup filter</p>}
                        </div>

                        <div className="md:w-3/4">
                            <EspMachineLoader isLoading={loading} />
                            {loading ? (
                                <div className="flex items-center justify-center py-20">
                                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-black"></div>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                                    {filteredProducts.map((product) => (
                                        <div
                                            key={product.id}
                                            className="bg-white p-6 rounded-lg shadow-lg transform transition hover:scale-105"
                                        >
                                            <img
                                                src={product.photos}
                                                alt={product.name}
                                                className="w-full h-48 object-cover rounded-md mb-4"
                                            />
                                            <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                                            {/* <h2 className="text-xl font-semibold text-gray-800"> ID: {product._id}</h2> */}
                                            <p className="text-lg text-black font-medium mt-2">{product.price} JOD</p>
                                            <button
                                                className="w-full mt-4 bg-[#E1BA94] text-white py-2 rounded-md hover:bg-[#A7795E] transition"
                                                onClick={() => handleAddToCart(product)}>Add to Cart
                                            </button>
                                            <button
                                                className="w-full mt-2 bg-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-400 transition"
                                                onClick={() => viewDetails(product._id)}
                                            >
                                                View Details
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

            </div>
          
            <Footer />
          
        </>
    );
};

export default BrowseProducts;



