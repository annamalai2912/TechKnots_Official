import KnowledgeBase from "@/components/Knowledge";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Knowledge Base ",
  description: "",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Knowledge Base"
        description=""
      />
      <KnowledgeBase/>
    </>
  );
};

export default AboutPage;
