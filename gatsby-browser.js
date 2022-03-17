export const onRouteUpdate = ({ location }) => {
  console.log('process.env.GATSBY_GA_MEASUREMENT_ID: ', process.env.GATSBY_GA_MEASUREMENT_ID);
  console.log('location: ', location);

  setTimeout(() => {
    window.ga('create', `'${process.env.GATSBY_GA_MEASUREMENT_ID}'`, 'auto');
    window.gtag(`event`, `page_view`, { page_path: location });
  }, 2000);
};
