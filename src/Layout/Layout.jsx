import React, { useEffect, useState } from "react";
import { PostCategories } from "../services/apiRequest";
import { Link } from "react-router-dom";

const Layout = (props) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
         if(sessionStorage.getItem('categorys')){
           const data = sessionStorage.getItem('categorys')
           setList(JSON.parse(data))
         }else{
          const list = await PostCategories();
          setList(list);
          sessionStorage.setItem('categorys',JSON.stringify(list))
         }
    })();
  }, []);

  return (
    <>
      <div className="navbar bg-base-100 shadow mx-auto fixed top-0 z-50">
        <div className="container mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                  <Link to={'/'}>হোম</Link>
                </li>
              {list.map((ele, index) => (
                <li key={index.toString()}>
                  <Link to={'/BlogByCategory/'+ele["id"]}>{ele["name"]}</Link>
                </li>
              ))}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">Blogs</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
            <li>
                  <Link to={'/'}>হোম</Link>
                </li>
              {list.map((ele, index) => (
                <li key={index.toString()}>
                  <Link to={'/BlogByCategory/'+ele["id"]}>{ele["name"]}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {props.children}
    </>
  );
};

export default Layout;
