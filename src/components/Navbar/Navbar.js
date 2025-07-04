import { NavLink } from 'react-router-dom'; // use NavLink instead of Link
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">NewsIS</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active-nav' : ''}`} to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active-nav' : ''}`} to="/business">Business</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active-nav' : ''}`} to="/entertainment">Entertainment</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active-nav' : ''}`} to="/health">Health</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active-nav' : ''}`} to="/science">Science</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active-nav' : ''}`} to="/sports">Sports</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active-nav' : ''}`} to="/technology">Technology</NavLink>
              </li>
            </ul>
            {/* Image aligned to the right */}
            <img
              src={`${process.env.PUBLIC_URL}/news.jpg`} // from public folder
              alt="News Logo"
              className="img-fluid ms-auto d-none d-lg-block"
              style={{ height: '40px', borderRadius: '5px' }}
            />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
