import React, { useState } from 'react';
import { Link, useLocation } from '@remix-run/react';
import { ArrowLeftToLine, ArrowRightToLine } from 'lucide-react';
import styles from './SideBar.css';
import { useMatchMedia } from '../Common/hooks/useMatchMedia';
import Tooltip from '../Tooltip/Tooltip';

export const SideBarStyleLinks = () => [{ rel: 'stylesheet', href: styles }];

function SideBar({ sidebarLinks }) {
  const { pathname } = useLocation();
  const isMobile = useMatchMedia('(min-width: 320px) and (max-width: 767px)');
  const [ hideSidebar, toggleSideBar ] = useState(isMobile ? true : false);
  

  
  function getSideBarLinks() {
    return (
      sidebarLinks.map((sidebarLink) => {
        return (
          <li key={sidebarLink.link} className='sidebar-link'>
            <Link className={pathname === sidebarLink.link ? 'activeLink' : ''} to={sidebarLink.link}>
              <Tooltip text={sidebarLink.text}>
                <div className='link-text'>
                  {sidebarLink.icon}
                  {hideSidebar ? null : <span>{sidebarLink.text}</span>}
                </div>
              </Tooltip>
            </Link>
          </li>
        )
      })
    )
  }

  return (
    <aside className={`sidebar ${hideSidebar ? '' : 'active'}`}>
      <ul>
        {getSideBarLinks()}
      </ul>

      <footer className='footer' onClick={() => {toggleSideBar(!hideSidebar)}}>
        {hideSidebar ? <ArrowRightToLine /> : (
          <>
            <span>
             Collapse
            </span>
            <ArrowLeftToLine />
          </>
        )}
        
      </footer>
    </aside>
  )
}


export default React.memo(SideBar);