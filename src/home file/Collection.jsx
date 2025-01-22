

function Collection() {
    return (
        <div className=" mt-20 mb-20 ml-16 mr-16 ">
            <div>
                <div>
                    <p className="text-center text-4xl md:text-6xl font-bold dataText text-black">
                        Great Courses Of Knowledge
                    </p>
                </div>
                <div className="flex justify-center mt-10">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5">
                        <div>
                            <div className="flex justify-center">
                                <img className="h-[40px] md:h-[60px]" src="https://cdn-icons-png.flaticon.com/128/5968/5968544.png" alt="" />
                            </div>
                            <p className="text-center text-xl md:text-3xl dataText mt-3">
                                Languages
                            </p>
                        </div>
                        <div>
                            <div className="flex justify-center">
                                <img className="h-[40px] md:h-[60px]" src="https://cdn-icons-png.flaticon.com/128/838/838646.png" alt="" />
                            </div>
                            <p className="text-center text-xl md:text-3xl dataText mt-3">
                                Communication
                            </p>
                        </div>
                        <div>
                            <div className="flex justify-center">
                                <img className="h-[40px] md:h-[60px]" src="https://cdn-icons-png.flaticon.com/128/10262/10262278.png" alt="" />
                            </div>
                            <p className="text-center text-xl md:text-3xl dataText mt-3">
                                Skills
                            </p>
                        </div>
                        <div>
                            <div className="flex justify-center">
                                <img className="h-[40px] md:h-[60px]" src="https://cdn-icons-png.flaticon.com/128/29/29302.png" alt="" />
                            </div>
                            <p className="text-center text-xl md:text-3xl dataText mt-3">
                                Information
                            </p>
                        </div>
                        <div>
                            <div className="flex justify-center">
                                <img className="h-[40px] md:h-[60px]" src="https://cdn-icons-png.flaticon.com/128/3418/3418754.png" alt="" />
                            </div>
                            <p className="text-center text-xl md:text-3xl dataText mt-3">
                                Online University
                            </p>
                        </div>
                        <div>
                            <div className="flex justify-center">
                                <img className="h-[40px] md:h-[60px]" src="https://cdn-icons-png.flaticon.com/128/16036/16036744.png" alt="" />
                            </div>
                            <p className="text-center text-xl md:text-3xl dataText mt-3">
                                Business
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ===================================================================================================== */}

            <div className=" mt-10 ">
                <div className=" flex-col md:flex-row lg:flex-row flex justify-center items-center gap-10 ">
                    <div>
                        <img className="h-[300px] w-[500px] rounded-xl" src="https://www.coventry.ac.uk/globalassets/media/global/00-new-course-imagery/engineering-environment-and-computing/pg/management-of-information-systems-and-technology-1920x1080.jpg" alt="" />
                    </div>
                    <div>
                        <p className=" text-center text-gray-500 font-thin ">An information paragraph is a concise piece of writing<br></br> that focuses on delivering clear, factual, and well-organized <br></br>details about a specific topic. It typically begins<br></br> with a topic sentence that introduces the main idea,<br></br> followed by supporting sentences that provide evidence,<br></br> examples, or explanations to expand on the topic. </p>
                        <div className=" flex justify-center">
                            <button className=" btn bg-blue-900 mt-5 text-white dataText text-2xl ">View All Courses</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Collection
