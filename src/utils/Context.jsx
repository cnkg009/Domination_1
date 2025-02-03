// import axios from "./axios";
// import instance from './utils/axios';
import axios from "./axios";
import React, { createContext, useContext, useEffect, useState } from "react";

export const Productcontext = createContext();

export const Context = (props) => {
  const [products, setproducts] = useState(JSON.parse(localStorage.getItem("products" || null)) 
  );

    const getproducts = async()=>{
          try {
              const  {data} = await axios("/products")
              setproducts(data)

          } catch (error) {
              console.log(error)
          }
      }
      console.log(products)
      useEffect(()=>{
          getproducts()
      }, [])
  return (
    <div>
      <Productcontext.Provider value={[products, setproducts]}>
        {props.children}
      </Productcontext.Provider>
    </div>
  );
};
