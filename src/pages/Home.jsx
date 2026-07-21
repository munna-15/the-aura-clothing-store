import HeroSection from '../components/Home/Hero/HeroSection'
import FeaturedCollection from '../components/Home/FeaturedCollection/FeaturedCollection'
import NewArrivals from '../components/Home/NewArrivals/NewArrivals'
import BrandStory from '../components/Home/BrandStory/BrandStory'
import Lookbook from '../components/LookBook/LookBook'
import CustomerReviews from '../components/Reviews/CustomerReviews'
import OfferContainer from '../components/OfferContainer'
import Newsletter from '../components/Home/Newsletter/Newsletter'
import TrustBar from '../components/Home/TrustBar/TrustBar'


const Home = () => {
  return (
    <>
      <HeroSection />

      <FeaturedCollection />

      <NewArrivals />

      <BrandStory />

      <Lookbook />

      <CustomerReviews />

      <OfferContainer />
      <Newsletter />
      <TrustBar />
    </>
  )
}

export default Home