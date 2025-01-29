import { Link } from "react-router-dom"


function ContactBanner() {
    return (
        <div
            className="bg-no-repeat bg-cover"
            style={{
                backgroundImage:
                    "url(https://img.freepik.com/free-vector/blue-copy-space-digital-background_23-2148821698.jpg?t=st=1738076369~exp=1738079969~hmac=7a73fb9ba8897661598b9672b768b922035f75e90c8c612c531d0f5ab26601e5&w=740)",
            }}
        >
            <div className="text-white bg-gradient-to-r from-[#00000086] via-[#020202da] p-5 sm:p-10">
                <p className="text-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl dataText">
                    Contact With Us
                </p>
                <p className="text-center mt-3 sm:mt-5 font-mono text-sm sm:text-base">
                    Fantastic LMS and instructors, well laid out, good speed, and explains.
                </p>
                <div className="flex flex-col md:flex-row justify-center items-center gap-3 sm:gap-5 mt-5 sm:mt-10">
                    <p className="btn font-mono w-[80px] sm:w-[100px] bg-cyan-800 text-white text-center">
                        <Link to="/">Home</Link>
                    </p>
                    <p className="btn font-mono w-[80px] sm:w-[100px] bg-cyan-800 text-white text-center">
                        <Link to="/contact">Contact</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ContactBanner
