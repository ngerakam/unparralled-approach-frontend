import carousel1  from '../../images/C1.JPG';
import carousel2  from '../../images/C2.JPG';
import carousel3  from '../../images/C3.JPG';

function ImageHolder() {
    return ( 
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={carousel1} className="d-block w-100" alt="..."/>
      {/* <div className="carousel-caption d-none d-md-block">
        <h5>We Find & Fund</h5>
        <p>Hepto as organization with its 
        offices in Eastern African region, history and experience in Africa’s 
        Health Cares Services, we constantly interact, identify the needs.</p>
      </div> */}
    </div>
    <div className="carousel-item">
      <img src={carousel2} className="d-block w-100" alt="..."/>
      {/* <div className="carousel-caption d-none d-md-block">
        <h5>We Educate</h5>
        <p>Constantly we organize for trainings of medical on the best practices,
         new equipment on how to use and repair and the non medical staff on first aid services.</p>
      </div> */}
    </div>
    <div className="carousel-item">
      <img src={carousel3} className="d-block w-100" alt="..."/>
      {/* <div className="carousel-caption d-none d-md-block">
        <h5>We Provide Care</h5>
        <p>Organizing for free medical camps, treating the poor and the 
        needy while providing food, bus fare and 
        accommodation for those traveling from far places</p>
      </div> */}
    </div>
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
     );
}

export default ImageHolder;