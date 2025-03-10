import React, { useEffect } from 'react';

import { BrowserRouter } from "react-router-dom";

import ReactGA from "react-ga4";

import { navigateTo, setResourceChain, registerOnUnAuthRedirectFn } from 'jcot-jslib';
import { libConstants } from 'jcot-jslib';

import { Routes } from "jcot-jsreactlib";

import { AppContextProvider } from './contexts';

import constants from './utils/constants';

import './styles/index.css';
import './styles/main.css';

import { importResourceChain } from './utils/loaders';

// register auth
registerOnUnAuthRedirectFn(() => {
	if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
		window.localStorage.removeItem(libConstants.X_ACCESS_TOKEN);
	}
	if (typeof window !== 'undefined') {
		navigateTo(libConstants.RTE_LOGIN);
	}
});

// locales
importResourceChain().then(enRes => {
  setResourceChain(enRes);
});

if(!constants.isDevMode()) {
  ReactGA.initialize(constants.GA_ID());
}

const App = () => {
  const pages = import.meta.globEager("./pages/**/!(*.test.[jt]sx)*.([jt]sx)");

  useEffect(() => {
    if(!constants.isDevMode()) {
      ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search });
    }
  }, []);

  return (
    <AppContextProvider>
      <BrowserRouter>
        <Routes pages={pages} />
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App
