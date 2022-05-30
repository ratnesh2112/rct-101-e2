import React from "react";

import { useState } from "react";

import AddProduct from "./AddProduct";

import Product from "./Product";

import Pagination from "./Pagination";

import BasicUsage from "./AddProduct";

import styles from "./products.module.css";

import{ v4 } from "uuid";

const Products = () => {
  // TODO: Remove below const and instead import them from chakra

  const [product, setProduct] = useState("")
  
  const addProduct = (newProduct) =>{

    const newproductobj = {

      id : v4(),
      title : newProduct,
    }

    setProduct([...product,newproductobj]);

  }

  return (
    <div className={styles.main}>
      
      <AddProduct addProduct={addProduct}/>
      {/* <Product product={product} /> */}
      <Pagination />

    </div>
  );
};

export default Products;
