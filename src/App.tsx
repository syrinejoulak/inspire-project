import React, { Fragment } from 'react';

import Header from './components/Header';
import IntroSection from './components/IntroSection';
import ReviewsSection from './components/ReviewsSection';
import NotFound from './UI/404';
import Layout from './layout';

import useWindowSize from './util/useWindowSize.js';

import './styles/globals.scss';

function App() {
  const { width } = useWindowSize();

  return (
    <Fragment>
      {width > 1024 ? (
        <Layout>
          <Header />
          <IntroSection />
          <ReviewsSection />
        </Layout>
      ) : (
        <NotFound />
      )}
    </Fragment>
  );
}

export default App;
