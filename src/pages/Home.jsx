
import Hero from "../components/Hero/Hero"
import Steps from "../components/Steps/Steps"
import ExperienceSection from "../components/Experience/ExperienceSection"
import FaqSection from "../components/FAQ/FaqSection";
import Customerlove from '../components/CustomersLove/CustomersLove';
import SliderTestimonials from '../components/SliderTestimonials/SliderTestimonials';


const Home = () => {
  return (
    <>
      <Hero />
      <ExperienceSection />
      <Customerlove />
      <SliderTestimonials />
      <FaqSection />
      <Steps />

    </>

  )
}

export default Home
