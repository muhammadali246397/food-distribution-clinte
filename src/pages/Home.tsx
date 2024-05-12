import Banner from "../components/home/Banner";
import DonorTestimonials from "../components/home/DonorTestimonials";
import Gallery from "../components/home/Gallery";
import SupplyPost from "../components/home/SupplyPost";


const Home = () => {
    return (
        <div>
           <Banner />
           <SupplyPost />
           <DonorTestimonials />
           <Gallery />
        </div>
    );
};

export default Home;