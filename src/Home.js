import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
  const {data: blogs, isPending, error} = useFetch("http://localhost:8000/blogs");

  return ( 
    <div className="home">
      { error && <div>{ error }</div>}
      {
        isPending &&
        <div className="loader-wrapper">
          <div className="loader"></div>
        </div>
      }
      { blogs && <BlogList blogs = { blogs } title = "Populer Posts"/> }
    </div>
   );
}
 
export default Home;