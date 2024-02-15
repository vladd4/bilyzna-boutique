import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={250}
    viewBox="0 0 250 515"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    className="col-lg-3 col-sm-4 col-6"
  >
    <rect x="0" y="0" rx="0" ry="0" width="223" height="400" />
    <rect x="0" y="415" rx="0" ry="0" width="61" height="18" />
    <rect x="0" y="440" rx="0" ry="0" width="223" height="45" />
    <rect x="0" y="495" rx="0" ry="0" width="61" height="18" />
  </ContentLoader>
);

export default Skeleton;
