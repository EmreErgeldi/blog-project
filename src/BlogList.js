import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return ( 
    <div className="blog-list">
      <h1>{ title }</h1>
      {blogs.map(blog =>(
        <div className="blog-preview" key={blog.id}>
          <div className="upper-infos">
              <p className="blog-channel">/{blog.channel}</p>
              <p>Posted by <span>{blog.author}</span></p>
          </div>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{ blog.title }</h2>
          </Link>
          <div className="bottom-infos">
            <div className="events">
              <button><i className="fa-solid fa-thumbs-up"><p>{blog.likes}</p></i></button>
              <button><i className="fa-solid fa-share"><p>Share</p></i></button>
              <button><i className="fa-solid fa-message"><p>Comments</p></i></button>
            </div>
            
          </div>
        </div>
      ))}
    </div>
   );
}
 
export default BlogList;