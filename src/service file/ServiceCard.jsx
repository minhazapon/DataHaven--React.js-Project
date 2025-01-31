import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ServiceCard() {
    const [searchQuery, setSearchQuery] = useState("");

    const cards = [
        { title: "Natural", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/24701-nature-natural-beauty.jpg/1200px-24701-nature-natural-beauty.jpg", description: "This is a detailed description of item one. It provides key features and benefits of the item." },
        { title: "Software", image: "https://images.yourstory.com/cs/1/b3cc3444ab5e11e88691f70342131e20/Whatissoftwareandtypesofsoftwarewithexamples1575272423828jpg?mode=crop&crop=faces&ar=16%3A9&format=auto&w=1920&q=75", description: "This is a detailed description of item one. It provides key features and benefits of the item." },
        { title: "Information Technology", image: "https://ccitraining.edu/wp-content/uploads/2023/12/Information-Technology.jpg", description: "This is a detailed description of item one. It provides key features and benefits of the item." },
        { title: "Company", image: "https://www.bankrate.com/2022/07/25160346/Most-valuable-tech-companies.jpg?auto=webp&optimize=high&crop=16:9", description: "This is a detailed description of item one. It provides key features and benefits of the item." },
        { title: "Programming languages", image: "https://media.licdn.com/dms/image/v2/D4D12AQExd0s7g9AxpQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1703166341281?e=2147483647&v=beta&t=6FY186NBgvVVlmCtZ5O3pa6DhK-seHvfeKHaYQXwVsg", description: "This is a detailed description of item one. It provides key features and benefits of the item." },
        { title: "River", image: "https://ecdn.dhakatribune.net/contents/cache/images/640x359x1/uploads/media/2024/09/01/River_Opu-6457ccd8884e8dfeaf76951f8c182f4a.jpg?jadewits_media_id=27657", description: "This is a detailed description of item one. It provides key features and benefits of the item." },
        { title: "Cities", image: "https://imageio.forbes.com/specials-images/imageserve/66a287879f9e730526b6f792/Tokyo-city-in-Japan/960x0.jpg?format=jpg&width=960", description: "This is a detailed description of item one. It provides key features and benefits of the item." },
        { title: "Tourist places", image: "https://s7ap1.scene7.com/is/image/incredibleindia/The-Best-Adventure-Experiences-in-Manali1-hero?qlt=82&ts=1726731002736", description: "This is a detailed description of item one. It provides key features and benefits of the item." },
    ];

    const filteredCards = cards.filter((card) =>
        card.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="mt-20 mb-20 ml-20 mr-20">
            <div>
                <div className="flex justify-center items-center gap-2">
                    <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="h-[60px]"
                        src="https://cdn-icons-png.flaticon.com/128/9610/9610533.png"
                        alt=""
                    />
                    <motion.p
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-center text-6xl font-sans font-bold text-black"
                    >
                        Our Information Service Category
                    </motion.p>
                </div>

                <div className="mt-10 flex justify-center">
                    <motion.input
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        type="text"
                        placeholder="Search..."
                        className="input input-bordered w-full max-w-md"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <Link to='/'>
                    <div className="mt-10">
                        {filteredCards.map((card, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className="hero bg-gradient-to-r from-white via-gray-200 to-cyan-800 mb-5"
                            >
                                <div className="hero-content flex-col lg:flex-row">
                                    <motion.img
                                        initial={{ scale: 0.9 }}
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.3 }}
                                        src={card.image}
                                        className="max-w-sm rounded-lg shadow-2xl h-[230px] w-full"
                                        alt={card.title}
                                    />
                                    <div>
                                        <motion.h1
                                            initial={{ x: -50, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ duration: 0.5 }}
                                            className="text-6xl dataText font-thin"
                                        >
                                            {card.title}
                                        </motion.h1>
                                        <motion.p
                                            initial={{ x: 50, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ duration: 0.5 }}
                                            className="py-6 text-black font-mono"
                                        >
                                            {card.description}
                                        </motion.p>

                                        <div>
                                            <button className=" btn text-white bg-cyan-800 ">Search</button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default ServiceCard;
