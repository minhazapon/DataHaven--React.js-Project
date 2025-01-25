
function Mobile() {
    return (
        <div className=" mt-20 mb-20 ml-20 mr-20 ">
            <div className=" flex-col md:flex-row lg:flex-row flex justify-between items-center gap-1">
                <div>
                    <img src="https://eduma.thimpress.com/demo-react/wp-content/uploads/sites/58/2022/03/img-phone.png" alt="" />
                </div>
                <div>
                    <p className=" text-4xl font-sans font-semibold text-black text-center md:text-start ">Mobile App</p>
                    <div className=" flex justify-center md:justify-start ">
                        <p className=" mt-2 h-[2px] w-[80px] bg-blue-900 text-center md:text-start  "></p>
                    </div>
                    <div>
                        <p className=" text-center md:text-start mt-5 text-gray-400 font-sans ">As we all have smartphones nowadays, being mobile friendly<br></br> is so important. We know that and we made your theme to be mobile friendly so<br></br> anyone will be happy when they visit your online learning course site.</p>
                    </div>
                    <div className=" flex-col md:flex-row lg:flex-row flex items-center gap-5 mt-5 ">
                        <img src="https://eduma.thimpress.com/demo-react/wp-content/uploads/sites/58/2022/03/google-play.png" alt="" />
                        <img src="https://eduma.thimpress.com/demo-react/wp-content/uploads/sites/58/2022/03/app-store.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mobile
