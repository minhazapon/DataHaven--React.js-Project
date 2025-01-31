import { Link } from "react-router-dom"


function HomeBanner() {
    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: "url(https://www.skylineuniversity.ac.ae/blog/images/2021/01/08/isvsit.jpg)",
                }}
            >
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="px-4 sm:px-8 md:px-16 lg:px-24">
                        <h1 className="mb-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold dataText">
                            "The best way to predict the future is to study the past, or prognosticate." – Robert Kiyosaki
                        </h1>
                        <a href="https://chatgpt.com" >
                            <button className="btn bg-cyan-500 dataText text-lg sm:text-xl md:text-2xl lg:text-3xl text-white">
                                Learn More
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default HomeBanner
