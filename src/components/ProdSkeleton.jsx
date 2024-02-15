import React from "react";
import ContentLoader from "react-content-loader";

const ProdSkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={1200}
    height={550}
    viewBox="0 0 1200 auto"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    className="col-12"
    {...props}
  >
    <rect x="26" y="10" rx="0" ry="0" width="1" height="1" />
    <rect x="108" y="13" rx="0" ry="0" width="0" height="1" />
    <rect x="0" y="0" rx="0" ry="0" width="1200" height="100%" />
  </ContentLoader>
);

export default ProdSkeleton;
