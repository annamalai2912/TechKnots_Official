import HelpCenter from "@/components/Help";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HelpCenter Page ",
  description: "",
  // other metadata
};

const Help = () => {
  return (
    <>
      <Breadcrumb
        pageName="HelpCenter"
        description=""
      />
      <HelpCenter/>
    </>
  );
};

export default Help;
