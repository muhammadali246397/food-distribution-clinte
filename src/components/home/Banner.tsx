import Container from "../ui/Container";

const Banner = () => {
    return (
        <div className="bg-hero-pattern bg-cover">
            <div className="bg-footer-texture ">
                <Container>
                    <div className="py-20 w-4/6">
                        <h1 className="text-7xl mt-20 font-bold text-white">Fueling change with every delivery, one meal at a time..</h1>
                        <p className="text-white mt-10 text-lg">At Food Flow, our mission is clear: to transform food distribution. We're committed to sustainability, reducing waste, and ensuring equitable access to quality provisions. Through innovation and collaboration, we're reshaping the future of food delivery, one plate at a time. Join us on this journey toward a better world.</p>
                        <button className="bg-[#0A152F] text-white font-semibold px-10 py-5 rounded-md text-xl mt-10 mb-20 hover:text-red-600 focus:text-red-600 ">Learn More</button>
                    </div>
                </Container>

            </div>
        </div>
    );
};

export default Banner;