import ContentDevelopment from "@/components/Content_Development";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Content Development",
  description: "",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Content Development"
        description=""
      />
      <ContentDevelopment/>
    </>
  );
};

export default AboutPage;
