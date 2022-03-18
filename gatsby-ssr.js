import React from 'react';
import { Partytown } from '@builder.io/partytown/react';

const ORIGIN = 'https://www.googletagmanager.com';
const GATSBY_GA_MEASUREMENT_ID = 'G-94MF2D2CTG';

export const onRenderBody = ({ setHeadComponents }) => {
  if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') return null;

  setHeadComponents([
    <Partytown key="partytown" forward={['gtag']} />,
    <script key="google-analytics" type="text/partytown" src={`${ORIGIN}/gtag/js?id=${GATSBY_GA_MEASUREMENT_ID}`} />,
    <script
      key="google-analytics-config"
      type="text/partytown"
      dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}

        gtag('js', new Date()); 
        gtag('config', '${GATSBY_GA_MEASUREMENT_ID}', { page_path: window.location.pathname })`
      }}
    />
  ]);
};
