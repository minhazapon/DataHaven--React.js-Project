
function Newsletter() {
    return (
        <div className=" mt-20 ">
            <div className=" bg-cyan-700 p-16 ">
                <div className=" flex-col md:flex-row lg:flex-row flex justify-center items-center gap-5 ">
                    <p className=" text-2xl font-serif text-white ">Subscribe our Newsletter
                    </p>
                    <div>
                        <form className=" flex-col md:flex-row lg:flex-row flex items-center gap-3 ">
                            <input className=" h-[50px] w-[270px]  md:w-[500px] rounded-xl p-4 border-[1px]  " required placeholder="Send Email" type="email" name="email" id="" />
                            <input className=" btn text-white bg-cyan-800 h-[50px]  w-[270px] md:w-[200px]  " type="submit" value="Send" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter
