import React, { useState } from 'react';

import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

import { doLogout, navigateTo, libConstants } from 'jcot-jslib';

import { HorizontalNavItem } from 'jcot-jstwblocklib';

import { useAppContext } from '../contexts';

import { Logo } from '../components/Logo';
import { navitems } from './navitems';

const HorizontalNavBar = () => {
  // state
  const [open, setOpen] = useState(false);
  // hooks
  const navigate = useNavigate();
  const [context, setContext] = useAppContext();

  // functions
  const handleLogout = async () => {
    console.log('handleLogout');
		setContext({});
		await doLogout(libConstants.API_AUTH_LOGOUT, () => {
			if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
				window.localStorage.removeItem(libConstants.X_ACCESS_TOKEN);
			}
            navigateTo(libConstants.RTE_LOGIN);
		}); 
  }

  // render
  return (
  <nav className="bg-white/10 border-b px-4 sm:px-8 py-1 sm:py-2">
    <div className="container flex flex-wrap justify-between items-center mx-auto w-full md:max-w-7xl">
      <div className="flex">
        <Logo extClass="h-6 w-6 text-indigo-500" />
      </div>

      <div className="text-sm">
        <span className="font-normal text-gray-800/70">Credits:</span> <span className="font-bold text-gray-800/80">{ (context && context.authContext && context.authContext.creditsLeft) || 0 } </span>
      </div>

      <button 
        type="button" 
        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false"
        onClick={() => setOpen(!open)}
      >
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
        </svg>
      </button>

      <div className={classNames("w-full md:block md:w-auto", open ? "" : "hidden")}>
        <ul className="flex flex-col mt-4 border items-start border-gray-100 rounded-lg bg-gray-50 md:flex-row md:items-center md:space-x-1 md:mt-0 md:border-0 md:bg-white/10">
          {navitems(navigate, handleLogout).map(x =>(
            <li key={x.label} className="flex justify-center items-center">
              <HorizontalNavItem key={x.label} icon={x.icon} label={x.label} checked={x.checked} onClick={x.onClick} />
            </li>
          ))}
        </ul>
      </div>

    </div>
  </nav>
  )
}

export default HorizontalNavBar;
