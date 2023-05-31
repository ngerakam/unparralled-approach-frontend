import { Link } from 'react-router-dom';
import feature  from '../../images/FA.JPG';

function FeatureDonate() {
    return ( 
    <div className="container pt-2">
      <div className="row">
        <div className="col-lg-7">
            <img 
            className="rounded-lg-3"
            alt=""
            width="520"
            src={feature} />
        </div>
        <div className="col-lg-4">
        <h4 className="fw-bold">
        Do good and good shall come back to you.
      </h4>
      <p className="lead">
        Giving is the most satisfying action, seeing the smile on someone's face
        it is just satisfying
      </p>
      <div >
        <Link
          to="/donate"
          type="button"
          className="btn bg-hepto-orange px-4 me-md-2 fw-bold mt-1"
        >
          Donate &#10084;
        </Link>
        {/* <a
          href="#"
          type="button"
          className="btn bg-hepto-blue px-4 mt-1"
        >
          Volunteer &#9994;
        </a> */}
      </div>
    </div>
    </div>
  </div> 
    );
}

export default FeatureDonate;