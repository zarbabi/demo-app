import { Link } from "react-router-dom";

const Blog = (props) => {
  const id = props.match.params.id;
  return (
    <div>
      <h2>Blog Detail - {id}</h2>
      <Link to="/blogs"> go to blog page</Link>
      <br></br>
      <Link to={`/blogs/${parseInt(id) + 1}`}> go to next page</Link>
    </div>
  );
};

export default Blog;
