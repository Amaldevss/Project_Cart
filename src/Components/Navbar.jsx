import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: 'crimson',
      color: 'red',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
    },
    brandLogo: {
      fontSize: '2rem',
      fontWeight: 'bold',
      textDecoration: 'none',
      color: 'white',
    },
    navLinks: {
      display: 'flex',
      listStyle: 'none',
      margin: 0,
      padding: 0,
    },
    navItem: {
      margin: '0 1rem',
    },
    navLink: {
      textDecoration: 'none',
      fontSize: '1.2rem',
      color: 'white',
     
      transition: 'color 0.3s ease',
    },
    
  };

  return (
    <header style={styles.navbar}>
      <div>
        <Link to="/" style={styles.brandLogo}>Product Cart</Link>
      </div>
      <nav>
        <ul style={styles.navLinks}>
          <li style={styles.navItem}>
            <Link
              to="/"
              style={styles.navLink}
            >
              Home
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link
              to="/add-product"
              style={styles.navLink}
            >
              Add Product
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
