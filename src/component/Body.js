import React, { useState } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import AboutMe from './Pages/AboutMe';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import Resume from './Pages/Resume';

export default function Body() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  const styles = {
    render: {
      hight: '100%',
      marginTop: '30px',
      marginBottom: '30px'
    }
  }

  return (
    <div style={styles.div}>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      <div style={styles.render}>
        {renderPage() }
      </div>
        <Footer  />
    </div>
  );
}
