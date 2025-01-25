import Swal from "sweetalert2";

function Newsletter() {


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
        <div className=" mt-20 ">
            <div className=" bg-cyan-700 p-16 ">
                <div className=" flex-col md:flex-row lg:flex-row flex justify-center items-center gap-5 ">
                    <p className=" text-2xl font-serif text-white ">Subscribe our Newsletter
                    </p>
                    <div>
                        <form onSubmit={onSubmit} className=" flex-col md:flex-row lg:flex-row flex items-center gap-3 ">
                            <input className=" h-[50px] w-[270px]  md:w-[500px] rounded-xl p-4 border-[1px]  " required placeholder="Send Email" type="email" name="email" id="" />
                            <input className=" btn text-white bg-cyan-800 h-[50px]  w-[270px] md:w-[200px]  " type="submit" value="Send" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter
