import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const PageContainer = (props) => {
  const { title, children, description } = props;

  return (
    <div className="container mt-5">
      <Helmet>
        <title>{title}</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content={description} />
        <link rel="canonical" href="locahost:3000" />
      </Helmet>
      {children}
    </div>
  );
};

export default PageContainer;
