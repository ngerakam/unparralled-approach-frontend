import React from 'react'
function BlogSideBar() {
    return ( 
<React.Fragment>
<div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white mt-2" style={{width: "280px"}}>

      <input className="form-control mr-sm-2 my-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    
    <div className="list-group list-group-flush border-bottom scrollarea my-2">
      <a href="#" className="list-group-item list-group-item-action active py-3 lh-tight" aria-current="true">
        <div className="d-flex w-100 align-items-center justify-content-between">
          <strong className="mb-1">List group item heading</strong>
          <small>Wed</small>
        </div>
        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
      </a>
      
    </div>
  </div>
  </React.Fragment>

     );
}

export default BlogSideBar;