

function InfoCard() {


    return (
        <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 mb-20 -mt-20">
            <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                    <div className="border-[1px] border-cyan-400 p-5 bg-white">
                        <div className="flex justify-center">
                            <img
                                className="h-[50px] w-[50px]"
                                src="https://cdn-icons-png.flaticon.com/128/2917/2917995.png"
                                alt=""
                            />
                        </div>
                        <p className="text-center font-serif mt-5">A Information Of Natural</p>
                        <p className="text-center font-serif mt-5">
                            "Information is a crucial resource in<br />
                            our daily lives, enabling us to make<br />
                            informed decisions."
                        </p>
                        <div className="flex justify-center mt-5">
                            <button className="btn bg-cyan-600 text-white">Read More</button>
                        </div>
                    </div>

                    <div className="border-[1px] border-cyan-400 p-5 bg-white">
                        <div className="flex justify-center">
                            <img
                                className="h-[50px] w-[50px]"
                                src="https://cdn-icons-png.flaticon.com/128/10276/10276295.png"
                                alt=""
                            />
                        </div>
                        <p className="text-center font-serif mt-5">A Information Of IT</p>
                        <p className="text-center font-serif mt-5">
                            "Information is a crucial resource in<br />
                            our daily lives, enabling us to make<br />
                            informed decisions."
                        </p>
                        <div className="flex justify-center mt-5">
                            <button className="btn bg-cyan-600 text-white">Read More</button>
                        </div>
                    </div>

                    <div className="border-[1px] border-cyan-400 p-5 bg-white">
                        <div className="flex justify-center">
                            <img
                                className="h-[50px] w-[50px]"
                                src="https://cdn-icons-png.flaticon.com/128/4893/4893592.png"
                                alt=""
                            />
                        </div>
                        <p className="text-center font-serif mt-5">A Information Of Sports</p>
                        <p className="text-center font-serif mt-5">
                            "Information is a crucial resource in<br />
                            our daily lives, enabling us to make<br />
                            informed decisions."
                        </p>
                        <div className="flex justify-center mt-5">
                            <button className="btn bg-cyan-600 text-white">Read More</button>
                        </div>
                    </div>

                    <div className="border-[1px] border-cyan-400 p-5 bg-white">
                        <div className="flex justify-center">
                            <img
                                className="h-[50px] w-[50px]"
                                src="https://cdn-icons-png.flaticon.com/128/284/284896.png"
                                alt=""
                            />
                        </div>
                        <p className="text-center font-serif mt-5">A Information Of world</p>
                        <p className="text-center font-serif mt-5">
                            "Information is a crucial resource in<br />
                            our daily lives, enabling us to make<br />
                            informed decisions."
                        </p>
                        <div className="flex justify-center mt-5">
                            <button className="btn bg-cyan-600 text-white">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default InfoCard
