import TechnicalSupport from "@/components/Support";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technical SUpport Page ",
  description: "",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Technical Support Page"
        description=""
      />
      <TechnicalSupport/>
    </>
  );
};

export default AboutPage;
