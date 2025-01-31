import { useLoaderData } from "react-router-dom"



function AllSearchItems() {

    const loader = useLoaderData()

    return (
        <div className=" mt-20 mb-20 ml-20 mr-20 ">

            <div>

                <div className=" flex justify-center items-center gap-3 ">
                    <img className="  h-[20px] md:h-[60px] " src="https://cdn-icons-png.flaticon.com/128/16207/16207051.png" alt="" />
                    <p className=" dataText  text-2xl md:text-6xl text-black ">Search Hub</p>
                </div>








            </div>

        </div>
    )
}

export default AllSearchItems
