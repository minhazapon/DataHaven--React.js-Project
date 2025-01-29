import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Swal from "sweetalert2";
import Newsletter from "../home file/Newsletter";

export default function ContactForm() {

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

    const formRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            formRef.current,
            { opacity: 0, y: 50, rotateY: 10 },
            { opacity: 1, y: 0, rotateY: 0, duration: 1, ease: "power3.out" }
        );
    }, []);

    const handleMouseMove = (e) => {
        const { left, top, width, height } = formRef.current.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / 20;
        const y = (e.clientY - top - height / 2) / 20;
        gsap.to(formRef.current, { rotateY: x, rotateX: -y, duration: 0.2 });
    };

    const handleMouseLeave = () => {
        gsap.to(formRef.current, { rotateY: 0, rotateX: 0, duration: 0.5, ease: "power2.out" });
    };

    return (
        <div>
            <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-cyan-500 to-black p-5">
                <div>
                    < p className=" text-center dataText text-4xl md:text-7xl text-black " > Fill the form below so we can get to know you and your needs better.</p >
                </div >
                <div
                    ref={formRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className="bg-gradient-to-b from-cyan-500 to-black p-8 rounded-2xl shadow-2xl max-w-md w-full transform transition-all"
                >
                    <h2 className="text-white text-2xl font-bold text-center mb-4">Contact Us</h2>
                    <form onSubmit={onSubmit} className="flex flex-col space-y-4 ">
                        <input required type="text" placeholder="Name" name="name" className="p-3 rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <input required type="email" placeholder="Email" name="email" className="p-3 rounded-lg  bg-black text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <input required type="text" placeholder="Subject" name="subject" className="p-3 rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <textarea required placeholder="Message" name="message" rows="4" className="p-3 rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                        <input className="p-3 bg-black hover:border-[1px] border-cyan-400 text-white rounded-lg font-bold transition-all" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
            <div>
                <Newsletter></Newsletter>
            </div>
        </div>

    );
}


