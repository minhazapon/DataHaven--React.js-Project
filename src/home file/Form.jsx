import Swal from "sweetalert2";
import Clock from "./CountClock"

function Form() {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "e87151e8-7baa-471d-b58a-0bd71fe1cd67");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            Swal.fire({
                title: 'Success!',
                text: 'Do you want to continue',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
            event.target.reset();
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Cool'
            })
            setResult(data.message);
        }
    };

    return (
        <div className=" bg-no-repeat bg-cover p-10 mb-10 "
            style={{
                backgroundImage: "url(https://www.codewithrandom.com/wp-content/uploads/2022/11/15-Bootstrap-login-forms32.png)",
            }}
        >
            <div className="mt-20 mb-20 mx-4 md:mx-16 text-white">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="w-full md:w-1/2">
                        <p className="text-xl">GET 100 OF ONLINE COURSES FOR FREE</p>
                        <p className="text-4xl md:text-7xl mt-5 font-semibold">THE COMPLETE</p>
                        <p className="text-xl mt-5">KNOWLEDGE GAIN COURSES</p>
                        <div className=" mt-20 ">
                            <Clock />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <p className="text-xl">
                            Create your free account now and immediately get access <br /> to 100s of

                            online courses.
                        </p>
                        <form onSubmit={onSubmit}>
                            <div className="mt-5">
                                <div>
                                    <input
                                        required
                                        className="h-[40px] w-full p-2 border border-gray-300 text-black"
                                        placeholder="Enter Your Full Name"
                                        type="text"
                                        name="fullName"
                                    />
                                </div>
                                <div>
                                    <input
                                        required
                                        className="mt-5 h-[40px] w-full p-2 border border-gray-300 text-black"
                                        placeholder="Enter Your Email"
                                        type="email"
                                        name="email"
                                    />
                                </div>
                                <div>
                                    <input
                                        required
                                        className="mt-5 h-[40px] w-full p-2 border border-gray-300 text-black"
                                        placeholder="Enter Your Phone Number"
                                        type="number"
                                        name="Phone"
                                    />
                                </div>
                                <input
                                    className="btn bg-cyan-800 mt-5 w-full text-white font-mono cursor-pointer"
                                    type="submit"
                                    value="GET NOW"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form
