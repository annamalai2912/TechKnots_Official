import Documentation from "@/components/Docs";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation ",
  description: "",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Documentation"
        description=""
      />
      <Documentation/>
    </>
  );
};

export default AboutPage;
