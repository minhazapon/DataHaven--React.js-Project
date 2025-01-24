

function War() {
    return (
        <div className=" flex justify-center mt-10  ">
            <div className=" grid  md:grid-cols-2 gap-10 ">
                <div className="h-[400px] p-6 rounded-md shadow-md bg-black text-gray-50 hover:border-[1px] border-cyan-400">
                    <img src="https://img.freepik.com/premium-photo/blackandwhite-scene-depicting-soldiers-advancing-towards-tank-amidst-wartorn-landscape_916189-8036.jpg?w=826" alt="" className="object-cover object-center w-full rounded-md h-[200px] bg-gray-500" />
                    <div className="mt-6 mb-2">
                        <span className="block text-xs font-medium tracking-widest uppercase text-white">War Part 1</span>
                    </div>
                    <p className="text-gray-100">War is a conflict between nations, states, or groups, often characterized by violence, destruction, and significant loss of life. </p>
                </div>
                <div className="h-[400px] p-6 rounded-md shadow-md bg-black text-gray-50 hover:border-[1px] border-cyan-400">
                    <img src="https://img.freepik.com/premium-photo/world-war-ii-epic-photo_483949-30981.jpg?w=826" alt="" className="object-cover object-center w-full rounded-md h-[200px] bg-gray-500" />
                    <div className="mt-6 mb-2">
                        <span className="block text-xs font-medium tracking-widest uppercase text-white">War Part 2</span>
                    </div>
                    <p className="text-gray-100">War is a conflict between nations, states, or groups, often characterized by violence, destruction, and significant loss of life. </p>
                </div>
                <div className="h-[400px] p-6 rounded-md shadow-md bg-black text-gray-50 hover:border-[1px] border-cyan-400">
                    <img src="https://img.freepik.com/premium-photo/hidden-dangers-war_1177032-11129.jpg?w=826" alt="" className="object-cover object-center w-full rounded-md h-[200px] bg-gray-500" />
                    <div className="mt-6 mb-2">
                        <span className="block text-xs font-medium tracking-widest uppercase text-white">War Part 3</span>
                    </div>
                    <p className="text-gray-100">War is a conflict between nations, states, or groups, often characterized by violence, destruction, and significant loss of life. </p>
                </div>
            </div>
        </div>
    )
}

export default War
