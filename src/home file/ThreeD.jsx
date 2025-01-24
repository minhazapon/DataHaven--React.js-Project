import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

const ImageBox = ({ imagePath }) => {
    const meshRef = useRef();
    const [hovered, setHovered] = useState(false);

    // Load texture
    const texture = useLoader(THREE.TextureLoader, imagePath);

    // Rotate effect on hover
    useFrame(() => {
        if (hovered) {
            meshRef.current.rotation.y += 0.02;
        }
    });

    return (
        <mesh
            ref={meshRef}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
        >
            <boxGeometry args={[3, 2, 0.1]} />
            <meshStandardMaterial map={texture} />
        </mesh>
    );
};

const Slider = () => {
    const images = [
        "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg", // Replace with your image paths
        "https://th.bing.com/th/id/OIG1.CgTbIrO0vUXLNU28HMdC", // Replace with your image paths
        "https://cdn.pixabay.com/photo/2023/03/15/20/46/background-7855413_640.jpg", // Replace with your image paths
        "https://images.ctfassets.net/hrltx12pl8hq/3Z1N8LpxtXNQhBD5EnIg8X/975e2497dc598bb64fde390592ae1133/spring-images-min.jpg", // Replace with your image paths
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className=" bg-black h-[600px] flex flex-col items-center justify-center text-center mb-20 p-5">
            {/* 3D Canvas */}
            <Canvas className="w-full h-[400px]">
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <ImageBox imagePath={images[activeIndex]} />
            </Canvas>

            {/* Controls */}
            <div className="mt-6 flex gap-4">
                <button
                    onClick={prevSlide}
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                    Previous
                </button>
                <button
                    onClick={nextSlide}
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Slider;
