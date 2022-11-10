import React from 'react';

import Header from './components/Header';
import IntroSection from './components/IntroSection';
import ReviewsSection from './components/ReviewsSection';
import Layout from './layout';

import './styles/globals.scss';

function App() {
  return (
    <Layout>
      <Header />
      <IntroSection />
      <ReviewsSection />
    </Layout>
  );
}

export default App;
