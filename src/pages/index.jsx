import React, { useState } from 'react';

import {  Notification, SpinnerModal } from 'jcot-jstwblocklib';
import { withAuth } from 'jcot-jsreactlib';

import { MainLayout } from '../layouts/';

function Index() {
  // state
  const [processing] = useState(false);
  const [notification, setNotification] = useState({show: false, variant: 'none', content: ''});

  // hooks

  // render
  return (
  <div className="w-full mx-auto md:max-w-7xl flex-1">
    <Notification 
      variant={notification.variant}
      show={notification.show}
      onClose={() => setNotification({show: false})}
      position="bottom-right"
      content={notification.content}
      icon={(<svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
           <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
         </svg>)}
    />

    { processing && 
      <SpinnerModal
        text={(<p className="text-center">Processing.<br/>Wait until it completes ...</p>)}
      /> 
    }

  </div>
  )
}

Index.Layout = MainLayout;

export default withAuth(Index);
