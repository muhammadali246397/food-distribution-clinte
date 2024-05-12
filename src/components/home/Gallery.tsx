import Container from "../ui/Container";
import photo1 from '../../assets/photo1.avif'
import photo2 from '../../assets/photo2.jpg'
import photo3 from '../../assets/photo3.jpg'
import photo4 from '../../assets/photo4.jpg'
import photo5 from '../../assets/photo5.avif'
import photo6 from '../../assets/photo6.avif'

const Gallery = () => {
    return (
        <div>
            <Container>
                <div className="text-center my-20">
                    <h2 className="text-5xl font-bold"><span className="border-b-4 pb-1">Photo <span className="text-red-600">Gallery</span></span></h2>
                    <p className="text-lg mt-5 ">Discover the harmonious blend of essential supplies awaiting exploration, each card a <br /> testament to our commitment to convenience and quality."
                    </p>
                </div>
                <div className="grid grid-cols-5 gap-2 my-10">
                    <div className="w-full h-72 mt-auto bg-red-200 col-span-2">
                        <img className="w-full h-full" src={photo1} alt="" />
                    </div>

                    <div className="w-full h-96 bg-red-200 mt-5">
                        <img className="w-full h-full" src={photo2} alt="" />
                    </div>

                    <div className="w-1/2 h-72 bg-red-200 col-span-2 mt-auto">
                        <img className="w-full h-full" src={photo3} alt="" />
                    </div>

                    <div className="w-1/2 h-72 bg-red-200 col-span-2 ml-auto">
                        <img className="w-full h-full" src={photo4} alt="" />
                    </div>

                    <div className="w-full h-96 bg-red-200">
                        <img className="w-full h-full" src={photo5} alt="" />
                    </div>

                    <div className="w-full h-72 bg-red-200 col-span-2">
                        <img className="w-full h-full" src={photo6} alt="" />
                    </div>


                </div>

            </Container>
        </div>
    );
};

export default Gallery;