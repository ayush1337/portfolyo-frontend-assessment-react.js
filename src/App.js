import React, { useCallback, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/css/tailwind.css';
import './assets/css/materialdesignicons.min.css';
import Index from './main/index';
import Switcher from './components/Switcher';
import IndexTwo from './main/index-two';
import IndexThree from './main/index-three';
import IndexDark from './main/index-dark';
import IndexRtl from './main/index-rtl';
import { PortfolioContext } from './components/PortfolioContext';
import { Skeleton } from './components/Skeleton';

function App() {
  const [protfolioData, setPortfolioData] = useState({
    success: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const USER_ID = '65b3a22c01d900e96c4219ae';
  const BASE_URL = `https://portfolio-backend-30mp.onrender.com/api/v1/get/user/${USER_ID}`;

  //fetch portfolio data & sets the state.
  const getPortfolioData = useCallback(async () => {
    try {
      setIsLoading(() => true);
      const res = await fetch(BASE_URL);
      if (!res.ok) {
        throw new Error(`Something went wrong`);
      }
      const data = await res.json();
      setPortfolioData(() => data);
    } catch (e) {
      setIsError(`Something went wrong`);
    } finally {
      setIsLoading(() => false);
    }
  }, [BASE_URL]);

  useEffect(() => {
    getPortfolioData();
  }, [getPortfolioData]);

  //renders the loading component while data fetching.
  if (isLoading) {
    return <Skeleton />;
  }

  //If any error while fetching the call.
  if (isError) {
    return (
      <div className="w-full text-center font-semibold p-4">{isError}</div>
    );
  }
  return (
    <BrowserRouter>
      <PortfolioContext.Provider value={protfolioData}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/index-two" element={<IndexTwo />} />
          <Route path="/index-three" element={<IndexThree />} />
          <Route path="/index-dark" element={<IndexDark />} />
          <Route path="/index-rtl" element={<IndexRtl />} />
        </Routes>
        <Switcher />
      </PortfolioContext.Provider>
    </BrowserRouter>
  );
}

export default App;
