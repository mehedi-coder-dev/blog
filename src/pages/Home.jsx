import { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import BlogLIst from "../components/BlogLIst";
import { PostNewest } from "../services/apiRequest";
import Loder from '../components/Loder'


const Home = () => {
  const [newblog, setblog] = useState(null)

  useEffect(()=>{
    (async()=>{
    const newData =   await PostNewest()
    setblog(newData)
    })()
  },[])

  return (
    <Layout>
      
      {newblog=== null? (<Loder/>):( <BlogLIst card = {newblog}/>)}
    </Layout>
  );
};

export default Home;
