import React from 'react'
import classes from './Header.module.css';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {

  return (
    <header>
      <div>
        <h1>Shop</h1>
        <nav>
          <ul className={classes.header_nav}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderComponent;