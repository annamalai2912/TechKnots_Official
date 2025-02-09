import FAQ from "@/components/FAQ";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ ",
  description: "",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="FAQ"
        description=""
      />
      <FAQ/>
    </>
  );
};

export default FAQ;
