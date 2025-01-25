
import { MdCall } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { MdMarkEmailRead } from "react-icons/md";

function Footer() {
    return (
        <div>


            <div className=" ml-12 mr-12 flex-col md:flex-row lg:flex-row flex justify-between items-center p-5 md:p-12 ">
                <div>
                    <div className=" flex items-center gap-2">
                        <div>
                            <img className=" h-[70px] " src="https://cdn-icons-png.flaticon.com/128/5337/5337412.png" alt="" />
                        </div>
                        <a className="text-2xl lg:text-4xl font-semibold dataText">
                            DataHaven
                        </a>
                    </div>
                    <p className=" mt-3 font-sans text-gray-400 ">Knowledge is the foundation of human growth and <br></br>progress, encompassing the information, skills, and<br></br> understanding acquired through education.</p>
                    <div className=" flex items-center gap-5 mt-5">
                        <div>
                            <p className=" h-[90px] w-[1px] bg-gray-300 "></p>
                        </div>
                        <div>
                            <div className=" flex items-center gap-1">
                                <p><MdCall /></p>
                                <p className=" font-sans text-gray-400 ">+110121012</p>
                            </div>
                            <div className=" mt-3 flex items-center gap-1">
                                <p><CiLocationOn /></p>
                                <p className=" font-sans text-gray-400 ">+ 58 Howard Street #2 San Francisco</p>
                            </div>
                            <div className=" mt-3 flex items-center gap-1">
                                <p><MdMarkEmailRead /></p>
                                <p className=" font-sans text-gray-400 ">+contact@eduma.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p className=" h-[1px]  md:h-[270px] w-[270px] mt-5 md:mt-0 mb-5 md:mb-0  md:w-[1px] bg-gray-300 "></p>
                </div>
                <div>
                    <div className="grid md:grid-cols-4 gap-10">
                        <div>
                            <p className=" text-2xl font-semibold font-sans ">Company</p>
                            <div>
                                <p className=" mt-3 font-sans text-gray-400 hover:text-cyan-700 cursor-pointer">About Us</p>
                                <p className=" mt-3 font-sans text-gray-400 hover:text-cyan-700 cursor-pointer">Blog</p>
                                <p className=" mt-3 font-sans text-gray-400 hover:text-cyan-700 cursor-pointer">Contact</p>
                                <p className=" mt-3 font-sans text-gray-400 hover:text-cyan-700 cursor-pointer">Become a Teacher</p>
                            </div>
                        </div>
                        <div>
                            <p className=" text-2xl font-semibold font-sans ">Links​</p>
                            <div>
                                <p className=" mt-3 font-sans text-gray-400 hover:text-cyan-700 cursor-pointer">Courses</p>
                                <p className=" mt-3 font-sans text-gray-400 hover:text-cyan-700 cursor-pointer">Events</p>
                                <p className=" mt-3 font-sans text-gray-400 hover:text-cyan-700 cursor-pointer">Gallery</p>
                                <p className=" mt-3 font-sans text-gray-400 hover:text-cyan-700 cursor-pointer">FAQs</p>
                            </div>
                        </div>
                        <div>
                            <p className=" text-2xl font-semibold font-sans ">Support</p>
                            <div>
                                <p className=" mt-3 font-sans text-gray-400 hover:text-cyan-700 cursor-pointer">Documentation</p>
                                <p className=" mt-3 font-sans text-gray-400 hover:text-cyan-700 cursor-pointer">Forums</p>
                                <p className=" mt-3 font-sans text-gray-400 hover:text-cyan-700 cursor-pointer">Language Packs</p>
                                <p className=" mt-3 font-sans text-gray-400 hover:text-cyan-700 cursor-pointer">Release Status</p>
                            </div>
                        </div>
                        <div>
                            <p className=" text-2xl font-semibold font-sans ">Recommend</p>
                            <div>
                                <p className=" mt-3 font-sans text-gray-400 hover:text-cyan-700 cursor-pointer">History</p>
                                <p className=" mt-3 font-sans text-gray-400 hover:text-cyan-700 cursor-pointer">Science</p>
                                <p className=" mt-3 font-sans text-gray-400 hover:text-cyan-700 cursor-pointer">Physics</p>
                                <p className=" mt-3 font-sans text-gray-400 hover:text-cyan-700 cursor-pointer">Sports</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
