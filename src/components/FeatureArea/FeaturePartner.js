import amazon  from '../../images/banner/amazon-smile.png';
import brightbrigde  from '../../images/banner/brytebridge.png';
import guidestar1  from '../../images/banner/guidestar.png';
import guidestar  from '../../images/banner/guidestar-by-candid.png';

function FeaturePartner() {
    return ( 

        <section className="section section-default mt-none mb-none bg-hepto-white">
  <div className="container">
    <h2 className="mb-sm"><b>Our Partners</b></h2>
    <strong>
      <div className="row">
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="square-holder">
            <img
              alt=""
              src={amazon}
            />
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="square-holder">
            <img
              alt=""
              src={brightbrigde}
            />
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="square-holder">
            <img
              alt=""
              src={guidestar}
            />
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="square-holder">
            <img
              alt=""
              src={guidestar1}
            />
          </div>
        </div>
      </div>
    </strong>
  </div>
</section>
     );
}

export default FeaturePartner;