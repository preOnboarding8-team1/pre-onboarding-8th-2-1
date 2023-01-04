import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';

const Loading = lazy(() => import('./components/Loading'));

const Issue = lazy(() => import('./pages/Issue'));

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <Issue />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
};

export default App;
