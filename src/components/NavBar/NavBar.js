import { Link } from 'react-router-dom';
import logo from '../../images/Hepto.png';
function NavBar() {
    return ( 
        <nav className="navbar navbar-expand-sm bg-hepto-blue">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">
        <img src={logo} />
      </Link>
          <button
          className="navbar-toggler bg-hepto-orange"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample03"
          aria-controls="navbarsExample03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon bg-hepto-orange"></span>
        </button>
      <div className="collapse navbar-collapse" id="navbarsExample03">
        <ul className="navbar-nav ms-auto mb-2 mb-sm-0">
          
          <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle text-light h6"
            href="#"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            ><b>WHO WE ARE</b></Link>
          <ul className="dropdown-menu bg-light">
            <li>
              <Link className="dropdown-item text-primary font-weight-bold" to="/glance"
                ><b>At a Glance</b></Link>
            </li>
            <li>
              <Link className="dropdown-item text-primary font-weight-bold" to="/strategy"><b>Our Strategy</b></Link>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-light h6" to="/"
          
          ><b>WHERE WE WORK</b></Link>
     
        </li>
        

        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle text-light h6"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            ><b>HOW TO HELP</b></a
          >
          <ul className="dropdown-menu bg-light">
            <li>
              <Link className="dropdown-item text-primary font-weight-bold" to="/"
                ><b>Donate</b></Link>
            </li>

            {/* <li>
              <a className="dropdown-item text-primary font-weight-bold" href="#"><b>Campaign</b></a>
            </li>
            <li>
              <a className="dropdown-item text-primary font-weight-bold" href="#"
                ><b>Volunteer</b></a
              >
            </li> */}
          </ul>
        </li>

        

        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle text-light h6"
            href="#"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            ><b>LIBRARY</b></a
          >
          <ul className="dropdown-menu text-primary font-weight-bold">
            <li>
              <Link className="dropdown-item text-primary font-weight-bold" to="/gallery"><b>Gallery</b></Link>
            </li>
            <li>
              <Link className="dropdown-item text-primary font-weight-bold" to="/blog"><b>Blog</b></Link>
            </li>
          </ul>
        </li>


        </ul>
        <a href="#" className="btn  bg-hepto-orange ms-2"
        >Donate &#10084;</a
      >
      </div>
    </div>
  </nav>
     );
}

export default NavBar;