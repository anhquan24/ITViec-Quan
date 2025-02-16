import React from 'react';
import '../styles/pagination.css';

function Pagination() {
  return (
    <nav aria-label="Page navigation" className="flex justify-center p-4 navigation">
      <ul className="pagination flex items-center gap-1">
        <li className="page-item">
          <a className="page-link" href="#" ><i className="fas fa-chevron-left itcom-m m-0"></i></a>         
        </li>
        <li className="page-item active">
          <a className="page-link" href="#">
            1
          </a>
        </li>
        <li className="page-item ">
          <a className="page-link" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <span className="page-link">...</span>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            51
          </a>
        </li>

        <li className="page-item">
          <a className="page-link" href="#" ><i className="fas fa-chevron-right itcom-m m-0"></i></a>         
        </li>

      </ul>
    </nav>
  )
}

export default Pagination

