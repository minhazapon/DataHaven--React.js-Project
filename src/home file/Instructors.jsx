


function Instructor() {
    return (
        <div className=" mt-20 mb-20 ml-20 mr-20">
            <div>
                <div className=" flex-col md:flex-row lg:flex-row flex justify-between items-center">
                    <p className=" text-xl md:text-2xl font-serif ">Top Instructors</p>
                    <div>
                        <p className=" text-xs md:text-xl  font-serif text-center mt-2 mb-2 ">Find the right instructor for you. Choose from many topics, and skill levels.</p>
                    </div>
                    <button className=" btn bg-cyan-900 text-white font-sans text-xs">View All</button>
                </div>
                <div className=" flex justify-center mt-10 ">
                    <div className=" grid  md:grid-cols-5 gap-5 ">
                        <div>
                            <div className=" flex justify-center  ">
                                <img className=" border-[1px] border-cyan-800 border-dashed p-3 h-[200px] w-[200px] rounded-full " src="https://img.freepik.com/free-photo/teacher-brunette-instructor-with-computer-suit-whiteboard-classroom-pointing-board_140725-163269.jpg?t=st=1737721718~exp=1737725318~hmac=9a3d27535af66ecbe700ae993d458edcd923cd55336ec74decdc9fcc22f59317&w=740" alt="" />
                            </div>
                            <p className=" text-center mt-3 text-5xl dataText ">John Doe</p>
                            <p className=" text-center text-gray-400 ">Working As Instructor and Historian</p>
                        </div>
                        <div>
                            <div className=" flex justify-center  ">
                                <img className=" border-[1px] border-cyan-800 border-dashed p-3 h-[200px] w-[200px] rounded-full " src="https://img.freepik.com/free-photo/teacher-smart-instructor-grey-suit-classroom-with-computer-whiteboard-explaining-geometry_140725-163417.jpg?t=st=1737722299~exp=1737725899~hmac=a6aa8bb747f6d45c0729f269834c80f792def615505d5853adfd9102d5a2ef85&w=740" alt="" />
                            </div>
                            <p className=" text-center mt-3 text-5xl dataText ">Ryan Dahl</p>
                            <p className=" text-center text-gray-400 ">Working As Instructor and Historian</p>
                        </div>
                        <div>
                            <div className=" flex justify-center  ">
                                <img className=" border-[1px] border-cyan-800 border-dashed p-3 h-[200px] w-[200px] rounded-full " src="https://img.freepik.com/premium-photo/evaluative-dynamics-as-instructors-assess-provide-feedback-students-skill-performances_765582-24656.jpg?w=826" alt="" />
                            </div>
                            <p className=" text-center mt-3 text-5xl dataText ">Jordan walk</p>
                            <p className=" text-center text-gray-400 text-xl ">Working As Instructor and Historian</p>
                        </div>
                        <div>
                            <div className=" flex justify-center  ">
                                <img className=" border-[1px] border-cyan-800 border-dashed p-3 h-[200px] w-[200px] rounded-full " src="https://img.freepik.com/premium-photo/young-business-coaching-arabian-man-smiling-raising-thumb-up_1187-45253.jpg?w=740" alt="" />
                            </div>
                            <p className=" text-center mt-3 text-5xl dataText ">Brendon Eich</p>
                            <p className=" text-center text-gray-400  ">Working As Instructor and Historian</p>
                        </div>
                        <div>
                            <div className=" flex justify-center  ">
                                <img className=" border-[1px] border-cyan-800 border-dashed p-3 h-[200px] w-[200px] rounded-full " src="https://img.freepik.com/premium-photo/man-giving-presentation-whiteboard_1368-128341.jpg?w=740" alt="" />
                            </div>
                            <p className=" text-center mt-3 text-5xl dataText ">Maxi On</p>
                            <p className=" text-center text-gray-400  ">Working As Instructor and Historian</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Instructor
