import React from 'react'
import _ from 'lodash';
function Pagination (props) {

    const { itemsCount , pageSize, currentPage, onPageChange } = props
    const pagesCount = itemsCount / pageSize
    const pages =  _.range(1, pagesCount + 1)

    return (
        <React.Fragment>
            <nav aria-label="Page navigation example" className='text-center'>
                <ul className="pagination justify-content-center">
                    {pages.map(page =>(
                        <li className={page === currentPage?  'page-item active' : 'page-item'} key={page}>
                            <a className="page-link" href="#" onClick={() => onPageChange(page)}>{page}</a>
                            </li>
                    ))}
                    {/* <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                    
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">Next</a></li> */}
                </ul>
            </nav>
        </React.Fragment>

    );
}

export default Pagination ;