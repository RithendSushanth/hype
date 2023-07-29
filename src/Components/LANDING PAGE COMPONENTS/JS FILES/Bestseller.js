import React, { useState } from 'react';
import Imgdes from '../JS FILES/Imgdes';
import ProductCard from '../../PRODUCT LISTING PAGE COMPONENTS/JS FILES/ProductCard';
import '../CSS FILES/bestseller.css';
import { db } from '../../config/firebase-config';
import { collection, getDocs } from 'firebase/firestore';

export default function Bestseller() {
  // Collection reference
  const usersCollectionRef = collection(db, 'Best Sellers');

  const [product, setProduct] = useState([]);

  const getBestsellers = async () => {
    try {
      const querySnapshot = await getDocs(usersCollectionRef);
      const productData = [];

      querySnapshot.forEach((doc) => {
        const product = {
          id: doc.id,
          name: doc.data().Name, // Corrected field name from "Name" to "name"
          price: doc.data().Price, // Corrected field name from "Price" to "price"
          type: doc.data().Type,
        };
        productData.push(product);
      });

      setProduct(productData);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  // Call the getBestsellers function to fetch data
  getBestsellers();

  return (
    <>
      <div className="container-bestseller">
        <p>Bestsellers</p>
      </div>
      <div className="carousel-cards">
        {/* Check if product is defined before mapping */}
        {product &&
          product.map((item, index) => (
            <ProductCard name={item.name} type={item.type} price={item.price} key={item.id} />
          ))}
      </div>
    </>
  );
}
