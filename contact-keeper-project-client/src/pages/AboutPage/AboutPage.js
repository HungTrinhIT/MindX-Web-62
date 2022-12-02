import React from "react";
import PageContainer from "../../components/PageContainer/PageContainer";
import useViewport from "../../hooks/useViewport";

const AboutPage = () => {
  // Reuse logic
  const { isDesktop, isMobile } = useViewport();
  return (
    <PageContainer
      title="About us page"
      description="Contact Keeper about us page"
    >
      {isDesktop && (
        <div
          style={{
            backgroundColor: "red",
          }}
        >
          <h1>About us</h1>
          <h4>Version: 1.0.0</h4>
          <h6>Author: Hung Trinh</h6>
        </div>
      )}
      {isMobile && (
        <div
          style={{
            backgroundColor: "blue",
          }}
        >
          <h1>About us</h1>
          <h4>Version: 1.0.0</h4>
          <h6>Author: Hung Trinh</h6>
        </div>
      )}
    </PageContainer>
  );
};

export default AboutPage;
