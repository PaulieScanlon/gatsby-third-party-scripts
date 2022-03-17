import React from 'react';
import { Partytown } from '@builder.io/partytown/react';

const GA_MEASUREMENT_ID = 'G-94MF2D2CTG';

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  setHeadComponents([
    <Partytown
      key="partytown"
      resolveUrl={(url, location) => {
        if (url.hostname === 'www.googletagmanager.com' && url.pathname.endsWith('.js')) {
          var proxyUrl = new URL(`${location.origin}/google-analytics`);
          proxyUrl.searchParams.append('url', url.href);
          return proxyUrl;
        }
        return url;
      }}
    />,
    <script
      key="google-analytics"
      type="text/partytown"
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
    />
  ]);

  setPostBodyComponents([
    <script
      key="google-analytics-config"
      dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}

          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');`
      }}
    />
  ]);
};
