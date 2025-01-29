
function ContactCard() {
    return (
        <div className=" mt-20 mb-20 ml-20 mr-20 ">
            <div className=" flex-col md:flex-row lg:flex-row flex justify-center items-center gap-5">
                <div className=" w-[300px]  md:w-[400px] bg-white border-[1px] p-5 ">
                    <div className=" flex justify-center ">
                        <img className=" h-[60px] " src="https://cdn-icons-png.flaticon.com/128/1295/1295232.png" alt="" />
                    </div>
                    <p className=" font-mono text-center mt-5 text-2xl ">Address way</p>
                    <p className=" font-mono text-center mt-5 text-gray-400 text-xs ">1800 Abbot Kinney Blvd. Unit D & E Venice</p>
                </div>
                <div className=" w-[300px]  md:w-[400px] bg-white border-[1px] p-5 ">
                    <div className=" flex justify-center ">
                        <img className=" h-[60px] " src="https://cdn-icons-png.flaticon.com/128/7831/7831116.png" alt="" />
                    </div>
                    <p className=" font-mono text-center mt-5 text-2xl ">Contact info</p>
                    <p className=" font-mono text-center mt-5 text-gray-400 text-xs ">Mobile: (+88) - 1990 - 6886</p>
                </div>
                <div className=" w-[300px]  md:w-[400px] bg-white border-[1px] p-5 ">
                    <div className=" flex justify-center ">
                        <img className=" h-[60px] " src="https://cdn-icons-png.flaticon.com/128/15263/15263435.png" alt="" />
                    </div>
                    <p className=" font-mono text-center mt-5 text-2xl ">Work timer</p>
                    <p className=" font-mono text-center mt-5 text-gray-400 text-xs ">Monday - Friday: 09:00 - 20:00</p>
                </div>
            </div>
        </div>
    )
}

export default ContactCard



