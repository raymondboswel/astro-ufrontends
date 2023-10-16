/** @jsxImportSource react */

import React from "react";
import MicroFrontendA from "http://localhost:8080/bundle-a.js";
// import DevFrontendA from "http://localhost:7100/bundle.js";
const MfA = () => {
  const isDev = import.meta.env.DEV;
  if (isDev) {
    return <MicroFrontendA/>;
  } else {
    return <MicroFrontendA />;
  }
};

export default MfA;
