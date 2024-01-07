import React from 'react';
import { GithubFilled } from '@ant-design/icons';
import './topbar.css';

function Topbar() {
  const handleLinkClick = (path) => {
    window.location.href = path; // Yeni sayfaya yönlendirme
  };

  return (
    <div className='top'>
      <div className='topLeft'>
        <div onClick={() => handleLinkClick('/')}>
          <GithubFilled className='topIcon' />
        </div>
      </div>
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItem' onClick={() => handleLinkClick('/')}>
            HOME
          </li>
          <li className='topListItem' onClick={() => handleLinkClick('/about')}>
            ABOUT US
          </li>
        </ul>
      </div>
      <div className='topRight'></div>
    </div>
  );
}

export default Topbar;
