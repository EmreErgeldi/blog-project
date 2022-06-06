const Blog = ({blog}) => {
  return ( 
    <article className="blog">
      <h2 className="blog-title">{ blog.title }</h2>
      <p> {blog.filters} </p>
      <p className="blog-author">Posted by { blog.author }</p>
      <div className="blog-body">{ blog.body }</div>
      <div className="bottom-infos">
        <div className="banners">
          <p>has <span>{ blog.likes }</span> likes</p>
          <p> {blog.filters} </p>
        </div>
        <button><i class="fa-solid fa-thumbs-up"><p>Like</p></i></button>
        <button><i class="fa-solid fa-share"><p>Share</p></i></button>
        <button><i class="fa-solid fa-message"><p>Comments</p></i></button>
      </div>
    </article>
   );
}
 
export default Blog;