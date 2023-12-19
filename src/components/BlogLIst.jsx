import { Link } from "react-router-dom";

const BlogLIst = (props) => {


  return (
    <div className="container mx-auto p-9 mt-32">
      <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
   {
    props.card?.map((item,index)=>(
      <Link to={'/BlogDetils/'+item['id']} key={index.toString()} className="card w-100 glass">
      <figure>
        <img src={item['img']} alt="car!" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item['title']}</h2>
        <p>{item['short']}</p>
      </div>
    </Link>
    ))
   }
      </div>
    </div>
  );
};

export default BlogLIst;
