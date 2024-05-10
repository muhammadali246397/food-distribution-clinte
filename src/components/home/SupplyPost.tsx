import Container from "../ui/Container";
import SupplyPostCard from "./SupplyPostCard";


const SupplyPost = () => {
    return (
      <div className="bg-base-100">
          <Container>
            <div className="py-20">
                <div className="text-center">
                    <h2 className="text-5xl font-bold"><span className="border-b-4 pb-1">Supply <span className="text-red-600">Harmony</span></span></h2>
                    <p className="text-lg mt-5 ">Discover the harmonious blend of essential supplies awaiting exploration, each card a <br /> testament to our commitment to convenience and quality."                      
                    </p>
                    <div className="grid grid-cols-3 gap-8 mt-10">
                        <SupplyPostCard/>
                        <SupplyPostCard/>
                        <SupplyPostCard/>
                        <SupplyPostCard/>
                        <SupplyPostCard/>
                        <SupplyPostCard/>
                    </div>
                </div>
            </div>
        </Container>
      </div>
    );
};

export default SupplyPost;