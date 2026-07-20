import AboutCTA from "../components/About/AboutCTA";
import AboutHero from "../components/About/AboutHero";
import AboutStats from "../components/About/AboutStats";
import BrandStory from "../components/About/BrandStory";
import Craftsmanship from "../components/About/Craftsmanship";
import Philosophy from "../components/About/Philosophy";


const About = () => {


  return (

    <main className="overflow-hidden bg-white">

      <AboutHero />
      <Philosophy />
      <BrandStory />
      <Craftsmanship />
      <AboutStats />
      <AboutCTA/>

    </main>

  );

};


export default About;