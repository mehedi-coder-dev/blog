import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import BlogDetail from "../components/BlogDetails";
import Loder from "../components/Loder";
import { BlogDeta } from "../services/apiRequest";

const BlogDetials = () => {
  const [details, setDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const detailsData = await BlogDeta(id);
      setDetails(detailsData);
    })();
  }, [id]);
  return (
    <Layout>
      {details === null ? <Loder /> : <BlogDetail datils={details} />}
    </Layout>
  );
};

export default BlogDetials;
