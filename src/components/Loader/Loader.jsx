import React from 'react';
import ContentLoader from 'react-content-loader';

const Loader = (props) => (
  <ContentLoader
    style={{ marginBottom: '10px' }}
    speed={2}
    width={800}
    height={170}
    viewBox="0 0 800 170"
    backgroundColor="#f3f2f2"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="0" y="0" rx="5" ry="5" width="374" height="25" />
    <rect x="0" y="130" rx="5" ry="5" width="199" height="20" />
    <rect x="-1" y="45" rx="5" ry="5" width="700" height="70" />
  </ContentLoader>
);

export default Loader;
