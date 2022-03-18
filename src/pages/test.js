import React from 'react';

const Page = () => {
  return (
    <main>
      <h1>
        Performance Optimization for third-party scripts{' '}
        <span role="img" aria-label="Party Popper">
          🎉
        </span>
      </h1>
      <p>
        third-party scripts:{' '}
        <a target="_blank" rel="noreferrer" href="https://partytown.builder.io/">
          Partytown
        </a>
      </p>
    </main>
  );
};

// export const config = () => {
//   return () => ({
//     defer: true
//   });
// };

export default Page;
