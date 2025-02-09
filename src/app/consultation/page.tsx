import Consultation from "@/components/Consultation";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consultation",
  description: "",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Consultation"
        description=""
      />
      <Consultation/>
    </>
  );
};

export default AboutPage;
