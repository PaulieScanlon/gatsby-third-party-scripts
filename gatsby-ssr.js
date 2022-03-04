import React from 'react';
import { Partytown } from '@builder.io/partytown/react';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <Partytown
      key="partytown"
      debug={true}
      resolveUrl={(url, location, method) => {
        if (method !== 'GET') {
          return url;
        }

        if (url.hostname === 'www.google-analytics.com') {
          var proxyUrl = new URL(location.origin);
          proxyUrl.pathname = `/_partytown`;
          proxyUrl.search = url.search;
          proxyUrl.append('url', url.href);
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
            
            ga('create', 'UA-76055934-4', 'auto');
            ga('send', 'pageview');`
      }}
    />
  ]);
};
