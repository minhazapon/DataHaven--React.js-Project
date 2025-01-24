import StepsTabs from "./RoundTabs"


function Steps() {
    return (
        <div className=" mt-20 mb-20 ml-20 mr-20 ">
            <div className=" flex-col md:flex-row lg:flex-row flex justify-center gap-20 ">
                <div>
                    <img className=" h-[500px] rounded-xl " src="https://img.freepik.com/free-vector/education-concept-illustration_114360-7988.jpg?t=st=1737711428~exp=1737715028~hmac=4ddcb12f7aef57ed3e80e01e25e46f0d2fb14cfb9c6a9c37ba2e6240347ef64c&w=740" alt="" />
                </div>
                <div>
                    <div>
                        <p className=" text-2xl text-black ">4 Steps to Learn</p>
                        <p className=" bg-blue-800 h-[3px] w-[50px] mt-5 "></p>
                    </div>
                    <div className=" mt-10 ">
                        <StepsTabs></StepsTabs>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Steps
