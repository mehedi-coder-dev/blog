
const BlogDetail = (props) => {
  console.log(props.datils)
  return (
    <div className="container mx-auto my-16 p-9">
      <div className="grid p-x-9 grid-cols-1 mt-2 md:grid-cols-1 lg:grid-cols-1">
      <div className="card w-100 glass">
            <figure>
              <img src={props.datils['img']} alt="car!" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{props.datils['title']}</h2>
              <p>{props.datils['content']}</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default BlogDetail;
