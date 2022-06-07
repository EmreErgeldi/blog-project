const Create = () => {
  return ( 
    <div className="create">
      <div className="form-upper">
        <select className="input-author">
          <option value="emre">emre</option>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
      </div>
      <form className="blog-form">
        
        
        <input
        type="text"
        required
        placeholder="Title"
        className="input-title"
        />
        <textarea
          required
          placeholder="Write your blog here..."
          className="input-body"
        ></textarea>
        <button className="submit-form">Post</button>
      </form>
    </div>
   );
}
 
export default Create;