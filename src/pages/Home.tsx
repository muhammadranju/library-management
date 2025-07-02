import { HeroSection } from "@/components/layout/HeroSection";
import { Helmet } from "react-helmet";
import Books from "./Books";
import { Statistic } from "@/components/layout/Statistic";

export const Home = () => {
  return (
    <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8  ">
      <Helmet>
        <title>Books Management System</title>
        <meta name="description" content="Books" />
      </Helmet>
      <HeroSection />
      <Books />
      <Statistic />
    </div>
  );
};
