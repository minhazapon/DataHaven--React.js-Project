
function DetailsOfItems({ items }) {

    const { id, image, name, title, details, location, countryName, placeName } = items

    return (
        <div>
            <div className="max-w-lg h-[800px] p-4 shadow-md bg-black text-gray-100 hover:border-[3px] border-cyan-600">
                <div className="flex justify-between pb-4 border-bottom">
                    <div className="flex items-center">
                        <a rel="noopener noreferrer" href="#" className=" font-thin mb-0 capitalize text-gray-100">{title}</a>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <img src={image} alt="" className="block object-cover object-center w-full rounded-md h-72 bg-gray-500" />
                    </div>
                    <div className="space-y-2">
                        <a rel="noopener noreferrer" href="#" className="block">
                            <h3 className="text-xl font-semibold mt-4 text-white">Name: {name} </h3>
                            <h3 className="text-xl font-semibold mt-4 text-white">location: {location} </h3>
                            <h3 className="text-xl font-semibold mt-4 text-white">countryName: {countryName} </h3>
                            <h3 className="text-xl font-semibold mt-4 text-white">placeName: {placeName} </h3>
                        </a>
                        <p className="leading-snug text-gray-400">Details: {details} </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsOfItems
