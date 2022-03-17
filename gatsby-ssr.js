import React from 'react';
import { Partytown } from '@builder.io/partytown/react';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <Partytown
      key="partytown"
      resolveUrl={(url, location) => {
        if (url.hostname === 'www.google-analytics.com' && url.pathname.endsWith('.js')) {
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
      src="https://www.googletagmanager.com/gtag/js?id=G-94MF2D2CTG"
    />
  ]);
};
