
import Hero from "../components/Hero/Hero"
import Steps from "../components/Steps/Steps"
import ExperienceSection from "../components/Experience/ExperienceSection"
import FaqSection from "../components/FAQ/FaqSection";
import Customerlove from '../components/CustomersLove/CustomersLove';


const Home = () => {
  return (
    <>
      <Hero />
      <ExperienceSection />
      <Customerlove />
      <FaqSection />
      <Steps />
    </>
  )
}

export default Home
