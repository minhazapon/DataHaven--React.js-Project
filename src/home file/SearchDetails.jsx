import { Link } from "react-router-dom"

function SearchDetails({ search }) {

    const { image, name, paragraph } = search

    return (
        <div>

            <div className="card bg-base-100 h-[500px] w-96 border-[1px]">
                <figure className="px-10 pt-10">
                    <img
                        src={image}
                        alt="Shoes"
                        className="rounded-xl  h-[200px] w-[300px] " />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title dataText text-4xl"> {name} </h2>
                    <p className=" text-gray-400 font-serif ">{paragraph}</p>
                    <div className="card-actions">
                        <Link to='/serviceCard'>
                            <button className="btn bg-cyan-700 text-white ">Learn More</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SearchDetails
