import React from "react";
import { Productcontext } from "../utils/Context";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [products]=  useContext(Productcontext)

  let distinct_category = products && products.reduce((acc,cv)=>[...acc,cv.category],[])
  distinct_category = [...new Set(distinct_category)]
  // console.log(distinct_category)


  const color = ()=>{
    return `rgba(${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()})`
  }
  return (
    <nav className="w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5">
      <a
        className="py-3 px-5 px-5 border rounded border-blue-200 text-blue-300"
        href="/create"
      >
        Add new Product
      </a>
      <hr className="w-[80%] my-3" />
      <h1 className="w-[80%] text-1xl">Category Filter</h1>
      <div className=" w-[80%]">

      {distinct_category.map((c,i)=>{
        return <Link key={i} to={`/?category=${c}`} className="flex items-ceter mb-3">
        <span style={{backgroundColor:color()}} className="block  w-[15px] h-[15px] mr-2 bg-blue-100 rounded-full"></span>
        {""}{c}
      </Link>
      })}


       
        {/* <li className="flex items-ceter mb-3">
          <span className="block  w-[15px] h-[15px] mr-2 bg-red-100 rounded-full"></span>
          cat 2
        </li>
        <li className="flex items-ceter mb-3">
          <span className="block  w-[15px] h-[15px] mr-2 bg-green-100 rounded-full"></span>
          cat 3
        </li> */}
      </div>
    </nav>
  );
}
