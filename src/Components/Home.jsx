import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import {Productcontext} from '../utils/Context'
import Loading from "./Loading";
import axios from "../utils/axios";


export default function Home() {
  const [products]=  useContext(Productcontext)
  
  const {search} = useLocation() // from react dom get all search  queries
  // console.log(search)
  const category = decodeURIComponent(search.split("=")[1]);
  // console.log(category)
//  let filteredProducts= products && products;

const [filteredProducts,setfilteredProducts] = useState(null)

  const getproductcategory = async ()=>{
    try {
      const {data} = await axios.get(`/products/category/${category}`)
      setfilteredProducts(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    if(!filteredProducts || category == 'undefined') 
      setfilteredProducts(products);

    if (category != "undefined") {

      setfilteredProducts(products.filter((p) => p.category == category));
      // getproductcategory()
    }
  },[category,products])
  return ( products ?
    <>
    <Nav/>
    <div className=" w-[85%]  p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">


      {filteredProducts &&filteredProducts.map((p,i)=>{
        return <Link key={i} to={`/Details/${p.id}`} className="mr-3 mb-3 card p-3 border shadow rounded  w-[18%] h-[30vh] flex justify-center items-center flex flex-col">
        <div
          className="hover:scale-110 w-full h-[80%] bg-contain bg-no-repeat bg-center"
          style={{
            backgroundImage:
              `url(${p.image})`,
          }}
        ></div>
        <h1 className="hover:text-blue-300">{p.title}</h1>
      </Link>
      })}

      



    </div>
    </>:<Loading/>
  ) 
}
