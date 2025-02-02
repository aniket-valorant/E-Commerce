import React from "react";
import MainCerousel from "../../components/Homecerousel/MainCerousel";
import HomeSectionCerousel from "../../components/HomeSectionCerousel/HomeSectionCerousel";
import { mens_kurta } from "../../../Data/Mens_kurta";

const HomePage = () => {
  return (
    <div>
      <MainCerousel />

      <div className="space-y-10 px-5 lg:px-10 py-10 flex flex-col justify-center">
        <HomeSectionCerousel data={mens_kurta} sectionName={"Mens's Kurta"}/>
        <HomeSectionCerousel data={mens_kurta} sectionName={"Top wear"}/>
        <HomeSectionCerousel data={mens_kurta} sectionName={"Bottom wear"} />
        <HomeSectionCerousel data={mens_kurta} sectionName={"Footwear"}/>
        <HomeSectionCerousel data={mens_kurta} sectionName={"Men's Grooming"}/>
      </div>
    </div>
  );
};

export default HomePage;
