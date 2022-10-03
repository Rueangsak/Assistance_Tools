import "../App.css";
import { Show } from "../components/show";
import { Navigation } from "../components/navigation";
import { Header } from "../components/header";
import { Features } from "../components/features";
import { About } from "../components/about";
import { Gallery } from "../components/gallery";
import { Contact } from "../components/contact";


import JsonData from "../data/data.json";
import SmoothScroll from "smooth-scroll";
import { useState, useEffect } from "react";
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});


const Main = () => {


  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);


  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Gallery data={landingPageData.Gallery}/>
      <Contact data={landingPageData.Contact} />
      <Show data={landingPageData.Show} />
    </div>
  );
};

export default Main;
