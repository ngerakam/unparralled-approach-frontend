function Footer() {

  const TheDate = new Date().getFullYear();

    return ( 

        <div className="container bg-hepto-white">
  <footer className="py-5">
    <div className="row">
      <div className="col-6 col-md-2 mb-3">
        <h5>WHO WE ARE</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-dark">At a Glance</a>
          </li>

          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-dark">Latest</a>
          </li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5>WHAT WE DO</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-dark">Health Education</a>
          </li>

          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-dark">Health Services</a>
          </li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5>WHERE WE WORK</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-dark">Locations</a>
          </li>
  
        </ul>
      </div>

      <div className="col-md-5 offset-md-1 mb-3">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label htmlFor="newsletter1" className="visually-hidden"
              >Email address</label
            >
            <input
              id="newsletter1"
              type="text"
              className="form-control"
              placeholder="Email address"
            />
            <button className="btn bg-hepto-blue" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div
      className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top"
    >
      <p>
        &copy; 2018 - {TheDate} Hepto, Inc. All rights reserved.
      </p>
      <ul className="list-unstyled d-flex fot-li">
        <li className="ms-5">
          <a
            className="link-dark"
            href="https://www.instagram.com/hepto.organization/?hl=en"
          >
           <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
        
        <li className="ms-5">
          <a
            className="link-dark"
            href="https://web.facebook.com/hepto.org/?_rdc=1&_rdr"
            ><i className="fa-brands fa-facebook-f"></i></a>
        </li>
        <li className="ms-5">
          <a
            className="link-dark"
            href="https://www.linkedin.com/in/healthcare-nonprofit-hepto-b733b3177/"
            ><i className="fa-brands fa-linkedin-in"></i>
          </a>
        </li>
        
      </ul>
    </div>
  </footer>
</div>
     );
}

export default Footer;