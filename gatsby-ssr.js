import React from 'react';
import { Partytown } from '@builder.io/partytown/react';

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  console.log('process.env.GATSBY_GA_MEASUREMENT_ID: ', process.env.GATSBY_GA_MEASUREMENT_ID);

  const origin = 'https://www.googletagmanager.com';

  setHeadComponents([
    <link key="preconnect" rel="preconnect" key="preconnect-google-gtag" href={origin} />,
    <link key="dns-prefetch" rel="dns-prefetch" key="dns-prefetch-google-gtag" href={origin} />,
    <Partytown
      key="partytown"
      // resolveUrl={(url, location) => {
      //   if (url.hostname === 'www.googletagmanager.com' && url.pathname.endsWith('.js')) {
      //     var proxyUrl = new URL(`${location.origin}/google-analytics`);
      //     proxyUrl.searchParams.append('url', url.href);
      //     return proxyUrl;
      //   }
      //   return url;
      // }}
    />,
    <script
      key="google-analytics"
      type="text/partytown"
      src={`${origin}/gtag/js?id=${process.env.GATSBY_GA_MEASUREMENT_ID}`}
    />
  ]);

  setPostBodyComponents([
    <script
      key="google-analytics-config"
      dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}

          gtag('js', new Date());
          gtag('config', '${process.env.GATSBY_GA_MEASUREMENT_ID}');`
      }}
    />
  ]);
};
