import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className='navbar navbar-expand-xxl bg-body-tertiary'>
      <div className='container-fluid'>
        <div className='d-flex align-items-center justify-content-between w-100'>
          <div className='align-items-center pt-5 px-5'>
            <Link className='navbar-brand fw-bold fs-5' to='/'>
              <img width={130} src='/images/HouseLogoGrey.svg' alt='logo' />
              <div>  House Finder</div>
            </Link>
          </div>

          <div className='d-flex align-items-center px-5'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item me-3'>
                <Link className='nav-link fw-bold fs-6 btn btn-secondary' to='/How'>
                  How Scoring SYSTEM works
                </Link >
              </li>
              <li className='nav-item me-3'>
              <Link className='nav-link fw-bold fs-6 btn btn-secondary'  to='/FAQ'>
                  FAQ
                  </Link >
              </li>
              <li className='nav-item me-5'>
              <Link className='nav-link fw-bold fs-6 btn btn-secondary'  to='/login'>
                  Login/Signup
                  </Link >
              </li>
            </ul>

            {/* Dummy user, should turn on/off based on login state */}
            <a className='text-primary fw-bold fs-5 text-decoration-none' href='#'>
              <img
                width={120}
                src='/images/DummyUserPhoto.jpg'
                alt='user'
                style={{ borderRadius: '50%' }}
              />
              User01
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navigation;
