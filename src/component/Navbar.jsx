import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="NavbarDiv">
      <nav>
        <Link className="link" to="/">
          Dashboard
        </Link>
        <Link className="link" to="/users">
          Users
        </Link>
        <Link className="link" to="/albums">
          Album
        </Link>
        <Link className="link" to="/comments">
          Comments
        </Link>
        <Link className="link" to="/photos">
          Photos
        </Link>
        <Link className="link" to="/posts">
          Posts
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
