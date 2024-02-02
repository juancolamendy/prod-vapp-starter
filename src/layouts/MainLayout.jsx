import React from 'react';
import PropTypes from 'prop-types';

import HorizontalNavBar from './HorizontalNavBar';

const MainLayout = ({children}) => {
	return (
  <div className="w-full min-h-screen min-h-full bg-white/20">
    <div className="flex flex-col"></div>
      <HorizontalNavBar />

      <div className="w-full flex-1 px-5 py-3">
        {children}
      </div>
	</div>
	);
};

MainLayout.propTypes = {
	children: PropTypes.node,
};

export default MainLayout;
