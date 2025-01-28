import { Link } from "react-router-dom"


function ContactBanner() {
    return (
        <div className=" bg-no-repeat bg-cover " style={{
            backgroundImage: "url(https://img.freepik.com/free-vector/blue-copy-space-digital-background_23-2148821698.jpg?t=st=1738076369~exp=1738079969~hmac=7a73fb9ba8897661598b9672b768b922035f75e90c8c612c531d0f5ab26601e5&w=740)",
        }}>
            <div className=" text-white bg-gradient-to-r from-[#00000086] via-[#020202da] p-10 ">
                <p className=" text-center dataText text-7xl font-bold ">Contact Wit Us</p>
                <p className=" text-center mt-5 font-mono ">Fantastic LMS and instructors, well laid out, good speed, and explains.</p>
                <div className=" flex-col md:flex-row lg:flex-row flex justify-center items-center gap-5 mt-10 ">
                    <p className=" btn font-mono w-[80px]  md:w-[100px] bg-cyan-800 text-white "><Link to='/'>Home</Link></p>
                    <p className=" btn font-mono w-[80px]  md:w-[100px] bg-cyan-800 text-white "><Link to='/contact'>Contact</Link></p>
                </div>
            </div>
        </div>
    )
}

export default ContactBanner
