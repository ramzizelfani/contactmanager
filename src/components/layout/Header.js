import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const { branding } = props;
  return (
    /*
    <div>
      <div>
        
        <h1 style={{ color: 'red', fontSize: '50 px' }}>{branding}</h1>
        <h1 style={headingStyle}>{branding}</h1>
  
        <h1>{branding}</h1>
      </div>
    </div>
    */
    <nav className='navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0'>
      <div className='container'>
        <Link to='/' className='navbar-brand'>
          {branding}
        </Link>
        <div>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <Link to='/' className='nav-link'>
                <i className='fas fa-home' /> Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact/add' className='nav-link'>
                <i className='fas fa-plus' /> Add
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-link'>
                <i className='fas fa-question-circle' />
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: 'My App',
};

Header.propTypes = {
  branding: PropTypes.string.isRequired,
};
/*const headingStyle = {
  color: 'yellow',
  fontSize: '60 px',
};*/
export default Header;
