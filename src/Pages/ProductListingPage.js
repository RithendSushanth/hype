import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ProductCard from '../Components/PRODUCT LISTING PAGE COMPONENTS/JS FILES/ProductCard';
import CategoryHeader from '../Components/PRODUCT LISTING PAGE COMPONENTS/JS FILES/CategoryHeader';
import './ProductListingPage.css';
import { useNavigate, useParams } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { auth, db } from '../Components/config/firebase-config';

export default function ProductListingPage() {
  const [products, setProducts] = useState([]);
  const [nresults, setNresults] = useState();

  const usersCollectionRef = collection(db, 'Products');
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Hype - Products';
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const querySnapshot = await getDocs(usersCollectionRef);
      const productData = [];

      querySnapshot.forEach((doc) => {
        const product = {
          id: doc.id,
          name: doc.data().Name, // Corrected field name from "Name" to "name"
          price: doc.data().Price, // Corrected field name from "Price" to "price"
        };
        productData.push(product);
      });

      setProducts(productData);
      setNresults(querySnapshot.size);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

 

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log('Logged Out!');
      navigate('/signin');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };


   // Use the useParams hook to get the URL parameters
   const { gender } = useParams();

   useEffect(() => {
    console.log('Gender received:', gender);
  }, [gender]);


  return (
    <>
      <Navbar opt1="MENS" opt2="WOMENS" opt3="KIDS" signoutButton={true} />
      <CategoryHeader category="Oversized T-shirts" nresults={nresults}/>

      <div className="product-card-collection">
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard name={product.name} price={product.price}/>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}
