import React from 'react';

const styles = {
  ul: {
    height: '100px',
    alignContent: 'center'
  },
  div: {
    marginLeft: '700px'
  },
  li: {
    margin: '5px',
  },
  h2: {
    marginLeft: '100px'
  }
}

function Nav({ currentPage, handlePageChange }) {
  return (
    <div class="nav">
    <ul className="nav nav-tabs" style={styles.ul}>
      <h2 style={styles.h2}>Bao Nguyen</h2>
      <div class="d-flex align-items-end" style={styles.div}>
        <li className="nav-item" style={styles.li}>
          <a
            href="#"
            onClick={() => handlePageChange('AboutMe')}
            className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
          >
            About Me
          </a>
        </li>
        <li className="nav-item" style={styles.li}>
          <a
            href="#"
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item" style={styles.li}>
          <a
            href="#"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
        <li className="nav-item" style={styles.li}>
          <a
            href="#"
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
        </li>
      </div>
    </ul>
    </div>
  );
}

export default Nav;
