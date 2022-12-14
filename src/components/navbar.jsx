import { Link } from "react-router-dom";
import image from './images/trivquiz.png';
const Navbar = () => {
  return (
    <nav class="navbar bg-dark">
      <div class="container-fluid">
       <Link to='/'>  <img src={image} style={{height:65}} ></img></Link>
        <form class="d-flex" role="giveup">
            <Link to='/endgame'>
          <button class="btn btn-outline-danger" type="submit">
            Give up
          </button>
          </Link>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
