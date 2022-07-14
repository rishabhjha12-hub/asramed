import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => (
    <footer className="footer">
      <div className='footerp'>
        <div>
            copyright@2030 asramedicalandsurgical
        </div>
        <div className='lin'>
            <Link className='lin' to="/">facebook</Link>
            <Link  className='lin' to="/">instagram</Link>
            <Link className='lin' to="/">emailus</Link>
        </div>

      </div>
    </footer>
  );

export default Footer