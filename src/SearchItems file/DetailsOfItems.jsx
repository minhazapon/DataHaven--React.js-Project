
function DetailsOfItems({ items }) {

    const { image, name, title, details, location, countryName, placeName } = items

    return (
        <div>
            <div className=" flex items-center justify-center p-4">
                <div className="relative bg-white rounded-2xl shadow-2xl  p-6 h-[700px] transform transition duration-500 hover:scale-105 hover:shadow-3xl">
                    <img src={image} alt={name} className="w-full h-48 object-cover rounded-lg shadow-lg" />
                    <h2 className="text-2xl font-bold text-gray-900 mt-4">{name}</h2>
                    <h3 className="text-xl text-gray-700 font-semibold">{title}</h3>
                    <p className="text-gray-600 mt-2 text-xs md:text-[15px] ">{details}</p>
                    <div className="mt-4">
                        <p className="text-gray-500"><strong>Location:</strong> {location}</p>
                        <p className="text-gray-500"><strong>Country:</strong> {countryName}</p>
                        <p className="text-gray-500"><strong>Place:</strong> {placeName}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsOfItems
