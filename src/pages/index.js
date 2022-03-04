import React from 'react';

import '../styles.css';

const Page = () => {
  return (
    <main>
      <h1>
        Performance Optimization for third-party scripts{' '}
        <span role="img" aria-label="Chart Increasing">
          📈
        </span>
      </h1>
      <p>
        third-party scripts:{' '}
        <a target="_blank" rel="noreferrer" href="https://www.gatsbyjs.com/plugins/gatsby-plugin-google-analytics/">
          gatsby-plugin-google-analytics
        </a>
      </p>
    </main>
  );
};

export default Page;
