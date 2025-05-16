import { NewPage } from "@/components/common";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About",
  description: "About Page",
};

const AboutPage = () => {
  return <NewPage title="About Page" />;
};

export default AboutPage;
