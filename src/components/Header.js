import React from 'react';
import { Link, NavLink } from 'react-router-dom'

function Header() {
  // const activeStyle=({isActive})=>{
  //   return{
  //       borderBottom:isActive?'0.2rem solid #bd945f':"none"
  //   }
  // }
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img className='logo-img' src="../images/logo.png" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to={'/'} className="nav-link" 
              >TRANG CHỦ</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/gioi-thieu'} className="nav-link "
              > GIỚI THIỆU </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/san-pham'} className="nav-link " 
              >SẢN PHẨM</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/tin-tuc'} className="nav-link " 
              >TIN TỨC</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/doi-tac'} className="nav-link " 
              >ĐỐI TÁC</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/lien-he'} className="nav-link " 
              >LIÊN HỆ</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Header