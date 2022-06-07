import { useNavigate } from "react-router-dom";

const Blog = ({blog}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    fetch(`http://localhost:8000/blogs/${blog.id}`, {
      method: 'DELETE'
    }).then(() => navigate("/"));
  }
  return ( 
    <article className="blog">
      <h2 className="blog-title">{ blog.title }</h2>
      <p> {blog.filters} </p>
      <p className="blog-author">Posted by { blog.author }</p>
      <div className="blog-body">{ blog.body }</div>
      <div className="bottom-infos">
        <div className="banners">
          <p> {blog.filters} </p>
        </div>
        <button><i className="fa-solid fa-thumbs-up"><p>{ blog.likes }</p></i></button>
        <button><i className="fa-solid fa-share"><p>Share</p></i></button>
        <button><i className="fa-solid fa-message"><p>Comments</p></i></button>
      </div>
      <button className="delete-blog" onClick={handleClick}>Delete</button>
    </article>
   );
}
 
export default Blog;