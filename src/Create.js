import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [ title, setTitle ] = useState('');
  const [ body, setBody ] = useState('');
  const [ author, setAuthor ] = useState('emre');
  const [ isPending, setIsPending ] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(true);
    
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(blog)
    }).then(() => {
      setIsPending(false);
      navigate("/");
    })
  }

  return ( 
    <div className="create">
      
      <form className="blog-form" onSubmit={handleSubmit}>
        <div className="form-upper">
          <select className="input-author" value={author} onChange={e => setAuthor(e.target.value)}>
            <option value="emre">emre</option>
            <option value="mario">mario</option>
            <option value="yoshi">yoshi</option>
          </select>
        </div>
        <input
        type="text"
        required
        placeholder="Title"
        className="input-title"
        value={ title }
        onChange={ e => setTitle(e.target.value) }
        />
        <textarea
          required
          placeholder="Write your blog here..."
          className="input-body"
          value={ body }
          onChange={ e => setBody(e.target.value) }
        ></textarea>
        { !isPending && <button className="submit-form">Post</button> }
        { isPending && <button className="submit-form" disabled>Posting blog</button> }
      </form>
    </div>
   );
}
 
export default Create;