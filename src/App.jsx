import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';

const Loading = lazy(() => import('./components/Loading'));
const IssueViewer = lazy(() => import('./pages/IssueViewer'));
const IssueWrite = lazy(() => import('./pages/IssueWrite'));
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
        <Route
          path="/issue/write"
          element={
            <Suspense fallback={<Loading />}>
              <IssueWrite />
            </Suspense>
          }
        />
      </Routes>
      <div>CI/CD TEST</div>
    </>
  );
};

export default App;
