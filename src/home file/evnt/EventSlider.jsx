
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

function EventSlider() {

    return (
        <div>

            <>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>
                        <div className=' flex justify-center '>
                            <div>
                                <div className=' flex justify-center '>
                                    <img className='  h-[200x] w-[200px] rounded-full ' src="https://img.freepik.com/premium-photo/portrait-confident-handsome-businessman-wearing-suit-isolated-thumbs-up_171337-70376.jpg?w=740" alt="" />
                                </div>
                                <p className=' font-sans text-2xl text-center mt-8 '>Jack Rush</p>
                                <p className=' font-sans text-center mt-8 '>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br> Ab ad, deserunt voluptas quisquam eos porro alias, eum<br></br> suscipit officiis aliquam, facere assumenda quaerat sint<br></br> voluptate sed sunt rerum accusamus fugit!</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' flex justify-center '>
                            <div>
                                <div className=' flex justify-center '>
                                    <img className='  h-[200x] w-[200px] rounded-full ' src="https://img.freepik.com/premium-photo/confident-senior-businessman-posing-conference-room_236854-21741.jpg?w=740" alt="" />
                                </div>
                                <p className=' font-sans text-2xl text-center mt-8 '>CFO</p>
                                <p className=' font-sans text-center mt-8 '>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br> Ab ad, deserunt voluptas quisquam eos porro alias, eum<br></br> suscipit officiis aliquam, facere assumenda quaerat sint<br></br> voluptate sed sunt rerum accusamus fugit!</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' flex justify-center '>
                            <div>
                                <div className=' flex justify-center '>
                                    <img className='  h-[200x] w-[200px] rounded-full ' src="https://img.freepik.com/premium-photo/smiling-mature-business-man_256588-478.jpg?w=740" alt="" />
                                </div>
                                <p className=' font-sans text-2xl text-center mt-8 '>CIO</p>
                                <p className=' font-sans text-center mt-8 '>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br> Ab ad, deserunt voluptas quisquam eos porro alias, eum<br></br> suscipit officiis aliquam, facere assumenda quaerat sint<br></br> voluptate sed sunt rerum accusamus fugit!</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </>

        </div>
    )
}

export default EventSlider
