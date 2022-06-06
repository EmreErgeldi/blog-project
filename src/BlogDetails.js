import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Blog from "./Blog";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, isPending, error } = useFetch("http://localhost:8000/blogs/" + id);
  return ( 
    <div className="blog-details">
      { error && <div>{ error }</div>}
      { isPending && <div className="loader-wrapper"></div> }
      { blog && <Blog blog = { blog } /> }
    </div>
   );
}
 
export default BlogDetails;