import { Swiper, SwiperSlide } from 'swiper/react';
import donor from '../../assets/donor.jpg'
import image from '../../assets/banar.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



const DonorTestimonials = () => {
    return (
        <div>
            <div className='mb-20 w-1/2 mx-auto'>
                <h2 className="text-5xl text-center font-bold"><span className="border-b-4 pb-1">Generosity  <span className="text-red-600">Gallery</span></span></h2>
                <p className="text-lg mt-5 text-center">Step into our Generosity Gallery, where heartfelt stories of supply contributions come to life, inspiring hope and highlighting the impact of our donors' kindness.
                </p>
            </div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div style={{backgroundImage:`url(${image})`}} className=" w-full bg-cover">
                        <div className='bg-footer-texture w-full '>
                            <div className='text-center md:w-1/2 mx-auto py-20'>
                                <div className='w-40 h-40 mx-auto rounded-full mt-20 p-1 border'>
                                    <img className=' w-full rounded-full' src={donor} alt="" />
                                </div>
                                <h2 className='font-semibold text-3xl text-white'>Emily Johnson</h2>
                                <h4 className='text-white text-xl font-semibold'>New York, USA</h4>
                                <p className='text-white text-lg mt-5 mb-20 px-10'>I'm incredibly grateful for the opportunity to contribute to such a meaningful cause. Knowing that my donation has directly impacted communities in need fills my heart with joy.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{backgroundImage:`url(${image})`}} className=" w-full bg-cover">
                        <div className='bg-footer-texture w-full '>
                            <div className='text-center md:w-1/2 mx-auto py-20'>
                                <div className='w-40 h-40 mx-auto rounded-full mt-20 p-1 border'>
                                    <img className=' w-full rounded-full' src={donor} alt="" />
                                </div>
                                <h2 className='font-semibold text-3xl text-white'>Emily Johnson</h2>
                                <h4 className='text-white text-xl font-semibold'>New York, USA</h4>
                                <p className='text-white text-lg mt-5 mb-20 px-10'>I'm incredibly grateful for the opportunity to contribute to such a meaningful cause. Knowing that my donation has directly impacted communities in need fills my heart with joy.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{backgroundImage:`url(${image})`}} className=" w-full bg-cover">
                        <div className='bg-footer-texture w-full '>
                            <div className='text-center md:w-1/2 mx-auto py-20'>
                                <div className='w-40 h-40 mx-auto rounded-full mt-20 p-1 border'>
                                    <img className=' w-full rounded-full' src={donor} alt="" />
                                </div>
                                <h2 className='font-semibold text-3xl text-white'>Emily Johnson</h2>
                                <h4 className='text-white text-xl font-semibold'>New York, USA</h4>
                                <p className='text-white text-lg mt-5 mb-20 px-10'>I'm incredibly grateful for the opportunity to contribute to such a meaningful cause. Knowing that my donation has directly impacted communities in need fills my heart with joy.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{backgroundImage:`url(${image})`}} className=" w-full bg-cover">
                        <div className='bg-footer-texture w-full '>
                            <div className='text-center md:w-1/2 mx-auto py-20'>
                                <div className='w-40 h-40 mx-auto rounded-full mt-20 p-1 border'>
                                    <img className=' w-full rounded-full' src={donor} alt="" />
                                </div>
                                <h2 className='font-semibold text-3xl text-white'>Emily Johnson</h2>
                                <h4 className='text-white text-xl font-semibold'>New York, USA</h4>
                                <p className='text-white text-lg mt-5 mb-20 px-10'>I'm incredibly grateful for the opportunity to contribute to such a meaningful cause. Knowing that my donation has directly impacted communities in need fills my heart with joy.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{backgroundImage:`url(${image})`}} className=" w-full bg-cover">
                        <div className='bg-footer-texture w-full '>
                            <div className='text-center md:w-1/2 mx-auto py-20'>
                                <div className='w-40 h-40 mx-auto rounded-full mt-20 p-1 border'>
                                    <img className=' w-full rounded-full' src={donor} alt="" />
                                </div>
                                <h2 className='font-semibold text-3xl text-white'>Emily Johnson</h2>
                                <h4 className='text-white text-xl font-semibold'>New York, USA</h4>
                                <p className='text-white text-lg mt-5 mb-20 px-10'>I'm incredibly grateful for the opportunity to contribute to such a meaningful cause. Knowing that my donation has directly impacted communities in need fills my heart with joy.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{backgroundImage:`url(${image})`}} className=" w-full bg-cover">
                        <div className='bg-footer-texture w-full '>
                            <div className='text-center md:w-1/2 mx-auto py-20'>
                                <div className='w-40 h-40 mx-auto rounded-full mt-20 p-1 border'>
                                    <img className=' w-full rounded-full' src={donor} alt="" />
                                </div>
                                <h2 className='font-semibold text-3xl text-white'>Emily Johnson</h2>
                                <h4 className='text-white text-xl font-semibold'>New York, USA</h4>
                                <p className='text-white text-lg mt-5 mb-20 px-10'>I'm incredibly grateful for the opportunity to contribute to such a meaningful cause. Knowing that my donation has directly impacted communities in need fills my heart with joy.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default DonorTestimonials;