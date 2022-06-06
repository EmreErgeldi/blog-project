import { Link } from "react-router-dom";

const Navbar = () => {
  return ( 
    <nav className="navbar">
      <h1>The Blog Project</h1>
      <div className="links">
        <Link to={"/"}>Home</Link>
        <Link className="new-blog" to={"/create"}>New Blog</Link>
        <Link to={"/login"}>Login</Link>
      </div>
    </nav>
   );
}
 
export default Navbar;