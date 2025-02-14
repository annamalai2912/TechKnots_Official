
import LMSBox from "@/components/LMSPortal/LMSBox";
import LMSFeatureList from "@/components/LMSPortal/LMSFeatureList";
import LMSPortal from "@/components/LMSPortal";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  
};

const LMSPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="LMS Portal"
        description=""
      />
      <LMSPortal />
    </>
  );
};

export default LMSPage;
