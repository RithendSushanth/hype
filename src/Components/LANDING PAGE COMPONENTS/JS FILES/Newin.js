import React, { useState } from 'react';
import Imgdes from "./Imgdes";
import ProductCard from "../../PRODUCT LISTING PAGE COMPONENTS/JS FILES/ProductCard";
import "../CSS FILES/newin.css";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase-config';


export default function Newin() {
    // Collection reference
    const usersCollectionRef = collection(db, 'New Ins');

    const [product, setProduct] = useState([]);
  
    const getNewIns = async () => {
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
        console.log('Error fetching products:', error);
      }
    };
    
    
  
    // Call the getBestsellers function to fetch data
    getNewIns();
    
  return (
    <>
    <div className="container-newin">
        <h1>New In</h1>
    </div>
      <div className="carousel-cards">
          {product.map((item) => {
            <ProductCard name={item.name} price={item.price} type={item.type} />
          })}
      
      </div>
    </>
  );
}
