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
            <div className="banners">
              <p>has <span>{ blog.likes }</span> likes</p>
              <p> {blog.filters} </p>
            </div>
            <button><i class="fa-solid fa-thumbs-up"><p>Like</p></i></button>
            <button><i class="fa-solid fa-share"><p>Share</p></i></button>
            <button><i class="fa-solid fa-message"><p>Comments</p></i></button>
          </div>
        </div>
      ))}
    </div>
   );
}
 
export default BlogList;