import CommunityForum from "@/components/Forum";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community Forum",
  description: "",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Community Forum"
        description=""
      />
      <CommunityForum/>
    </>
  );
};

export default AboutPage;
