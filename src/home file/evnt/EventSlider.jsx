
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

import { IoMdTime } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";

function EventSlider() {
    return (
        <div className=' flex-col md:flex-row lg:flex-row flex justify-center items-center gap-10 '>
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

            <div>
                <div>
                    <div className=" bg-[#48CFCB] w-fit md:w-[500px] p-10 rounded-xl text-white ">
                        <p className=" text-4xl font-semibold font-sans ">Events</p>
                        <div className=" mt-10 flex items-center gap-5 ">
                            <div className=" border-[1px] border-white w-fit p-2 rounded-xl ">
                                <p className=" text-xl text-center font-semibold ">23</p>
                                <p className=" text-center font-semibold ">DEC</p>
                            </div>
                            <div>
                                <p className=" font-sans text-2xl ">Learn to Write Flash Fiction</p>
                                <div className=" mt-2 flex items-center gap-2 ">
                                    <div className=" flex items-center gap-1">
                                        <p><IoMdTime className=" h-[20px] w-[20px] " /></p>
                                        <p className=" text-xs ">12:00 am - 5:00 pm</p>
                                    </div>
                                    <div className=" flex items-center gap-1">
                                        <p><IoLocationOutline className=" h-[20px] w-[20px] " /></p>
                                        <p className=" text-xs"> Birmingham, UK</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" mt-5 ">
                            <hr></hr>
                        </div>
                        <div className=" mt-10 flex items-center gap-5 ">
                            <div className=" border-[1px] border-white w-fit p-2 rounded-xl ">
                                <p className=" text-xl text-center font-semibold ">15</p>
                                <p className=" text-center font-semibold ">DEC</p>
                            </div>
                            <div>
                                <p className=" font-sans text-2xl ">Data Science and Fake News</p>
                                <div className=" mt-2 flex items-center gap-2 ">
                                    <div className=" flex items-center gap-1">
                                        <p><IoMdTime className=" h-[20px] w-[20px] " /></p>
                                        <p className=" text-xs ">12:00 am - 5:00 pm</p>
                                    </div>
                                    <div className=" flex items-center gap-1">
                                        <p><IoLocationOutline className=" h-[20px] w-[20px] " /></p>
                                        <p className=" text-xs">  Venice, Italy</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" mt-5 ">
                            <hr></hr>
                        </div>
                        <div className=" mt-10 flex items-center gap-5 ">
                            <div className=" border-[1px] border-white w-fit p-2 rounded-xl ">
                                <p className=" text-xl text-center font-semibold ">10</p>
                                <p className=" text-center font-semibold ">DEC</p>
                            </div>
                            <div>
                                <p className=" font-sans text-2xl ">Summer School 2022</p>
                                <div className=" mt-2 flex items-center gap-2 ">
                                    <div className=" flex items-center gap-1">
                                        <p><IoMdTime className=" h-[20px] w-[20px] " /></p>
                                        <p className=" text-xs ">12:00 am - 5:00 pm</p>
                                    </div>
                                    <div className=" flex items-center gap-1">
                                        <p><IoLocationOutline className=" h-[20px] w-[20px] " /></p>
                                        <p className=" text-xs"> NewYork, USA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default EventSlider
