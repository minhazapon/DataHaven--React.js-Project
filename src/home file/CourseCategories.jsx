import InfoTabs from "./InfoTabs"

function CourseC() {
    return (
        <div className="mt-20 mb-20 ml-28 mr-28">

            <div className=" flex  gap-24 ">

                <div>
                    <p className=" text-5xl dataText">Course Category</p>
                    <div>
                        <div class=" mt-10 relative w-[400px] h-[855px]  overflow-hidden rounded-lg shadow-lg">
                            {/* <!-- Background image with gradient overlay --> */}
                            <div class="relative w-full h-full">
                                <img
                                    src="https://d35v9chtr4gec.cloudfront.net/uteach/assets/feature-courses-1.webp"
                                    alt="Card Background"
                                    class="w-full h-full object-cover"
                                />
                                <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                            </div>
                            {/* <!-- Title in the center --> */}
                            <div class="absolute inset-0 flex items-center justify-center">
                                <h2 class="text-3xl font-bold text-white text-center font-serif">Trending Information</h2>
                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    <InfoTabs></InfoTabs>
                </div>

            </div>

        </div>
    )
}

export default CourseC
