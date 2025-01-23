import InfoTabs from "./InfoTabs"

function CourseC() {
    return (
        <div className="mt-20 mb-20 ml-28 mr-28">
            <div className=" flex-col md:flex-row lg:flex-row flex  gap-24 ">
                <div className="container mx-auto px-4">
                    <p className="text-3xl md:text-5xl font-bold dataText mb-8">Course Category</p>
                    <div className="flex justify-center">
                        <div className="mt-10 relative w-full max-w-[400px] h-[600px] sm:h-[750px] md:h-[855px] overflow-hidden rounded-lg shadow-lg">
                            {/* <!-- Background image with gradient overlay --> */}
                            <div className="relative w-full h-full">
                                <img
                                    src="https://d35v9chtr4gec.cloudfront.net/uteach/assets/feature-courses-1.webp"
                                    alt="Card Background"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                            </div>
                            {/* <!-- Title in the center --> */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center font-serif">
                                    Trending Information
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ////////////// */}
                <div>
                    <InfoTabs></InfoTabs>
                </div>
            </div>
        </div>
    )
}

export default CourseC
