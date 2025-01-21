import { useEffect } from "react"
import { useState } from "react"
import SearchDetails from "./SearchDetails"


function SearchItems() {

    const [search, setSearch] = useState([])

    const [searchItems, setSearchItems] = useState("")
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('search.json')
            .then(res => res.json())
            .then(data => {
                setSearch(data)
                setItems(data)
            })
    }, [])

    const handleSearch = event => {

        const searchValue = event.target.value.toLowerCase();
        setSearchItems(searchValue)

        const searchData = search.filter(items => items.name.toLowerCase().includes(searchValue))
        setItems(searchData)

    }

    return (
        <div className=" mb-20 ml-16 mr-16">
            <div>
                <div>
                    <p className=" text-black dataText text-center text-8xl">Search Items</p>
                    <p className=" text-center text-xl text-gray-500 ">"In the age of information, ignorance is a choice."
                        – Donny Miller</p>
                </div>
                <div className=" flex justify-center">
                    <input
                        className=" mb-10 mt-10 h-[60px] w-[1200px] border-[1px] border-gray-300 rounded-xl p-3 "
                        placeholder="Search Items"
                        value={searchItems}
                        onChange={handleSearch}
                        type="search"
                        name="search" id="" />
                </div>
                <div className=" flex justify-center ">
                    <div className=" grid  md:grid-cols-3 gap-5 ">
                        {
                            items.map(search => <SearchDetails key={search.id} search={search} ></SearchDetails>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchItems
