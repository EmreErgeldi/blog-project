const Create = () => {
  return ( 
    <div className="create">
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
        <div className="form-bottom">
          <select className="input-author">
            <option value="emre">emre</option>
            <option value="mario">mario</option>
            <option value="yoshi">yoshi</option>
          </select>
          <button className="submit-form">Add Blog</button>
        </div>
        
      </form>
    </div>
   );
}
 
export default Create;