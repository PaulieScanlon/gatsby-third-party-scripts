import React from 'react';
import { Partytown } from '@builder.io/partytown/react';

// const ORIGIN = 'www.google-analytics.com';
const GATSBY_UA_PROPERTY = 'UA-76055934-16';

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
      dangerouslySetInnerHTML={{
        __html: `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', ${GATSBY_UA_PROPERTY}, 'auto');
        ga('send', 'pageview');`
      }}
    />
  ]);
};
