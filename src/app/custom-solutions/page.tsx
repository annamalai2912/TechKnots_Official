import CustomSolutions from "@/components/Custom";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Solutions ",
  description: "",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Custom Solutions"
        description=""
      />
      <CustomSolutions/>
    </>
  );
};

export default AboutPage;
