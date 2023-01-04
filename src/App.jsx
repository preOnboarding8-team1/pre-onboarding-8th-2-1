import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';

const Loading = lazy(() => import('./components/Loading'));
const IssueViewer = lazy(() => import('./pages/IssueViewer'));
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
        <Route
          path="/issue/:id"
          element={
            <Suspense fallback={<Loading />}>
              <IssueViewer />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
};

export default App;
