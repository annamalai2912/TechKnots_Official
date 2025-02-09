import CorporateTraining from "@/components/Corporate";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Training ",
  description: "",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Corporate Training"
        description=""
      />
      <CorporateTraining/>
    </>
  );
};

export default AboutPage;
