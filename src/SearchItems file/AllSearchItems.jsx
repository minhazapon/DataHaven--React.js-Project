import DetailsOfItems from "./DetailsOfItems"
import { useEffect, useState } from "react"

function AllSearchItems() {

    const [items, SetItems] = useState([])

    useEffect(() => {
        fetch('all.json')
            .then(res => res.json())
            .then(data => SetItems(data))
    }, [])

    return (
        <div className=" mt-20 mb-20 ml-20 mr-20 ">
            <div>
                <div className=" flex justify-center items-center gap-3 ">
                    <img className="  h-[20px] md:h-[60px] " src="https://cdn-icons-png.flaticon.com/128/16207/16207051.png" alt="" />
                    <p className=" dataText  text-2xl md:text-6xl text-black ">Search Hub</p>
                </div>
                <div className=" flex justify-center mt-10">
                    <input
                        className="h-[50px] w-[350px] md:w-[1068px] border-[2px] border-cyan-700 rounded-xl p-3"
                        placeholder="Search Your Information"
                        type="search"
                        name="search"
                        id="" />
                </div>
                <div className=" flex justify-center mt-10">
                    <div className=" grid  md:grid-cols-2 gap-10 ">
                        {
                            items.map(items => <DetailsOfItems items={items}></DetailsOfItems>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllSearchItems
