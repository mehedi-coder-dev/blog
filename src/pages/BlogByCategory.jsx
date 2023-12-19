import { useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import BlogLIst from "../components/BlogLIst";
import { useEffect, useState } from "react";
import { PostList } from "../services/apiRequest";
import Loder from "../components/Loder";

const BlogByCategory = () => {
  const [card, setCard] = useState(null)
  const {CategoryID} = useParams()
  
  useEffect(()=>{
     (async()=>{
       const postList = await PostList(CategoryID)
       setCard(postList)
     })()
  },[CategoryID])
  return (
    <Layout>
      {
        card == null?(<Loder/>):(<BlogLIst card={card}/>)
      }
    </Layout>
  );
};

export default BlogByCategory;
