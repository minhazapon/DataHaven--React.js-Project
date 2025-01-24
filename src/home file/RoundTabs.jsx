import React, { useState } from "react";

const StepsTabs = () => {
    const [activeStep, setActiveStep] = useState(1);

    const steps = [
        { id: 1, label: "1 Step", content: "Sign in with your account -> Eduma provides every details and documents needed for your learning. You can start your lessons by clicking it at the content side-bar. Every lessons are prepared with texts, videos, images, presentation, and even audio. All you need to learn, are here with Eduma.", color: "bg-cyan-400" },
        { id: 2, label: "2 Steps", content: "Open the courses archive -> Now you can access the courses. Eduma provides all ranges of courses, from Developing to Photography, Video Editor, or even Kindergarten. You are free to choose the course you like. There's no limit with Eduma. All courses are well-built with detailed documents and attachments serving your learning progress.", color: "bg-green-500" },
        { id: 3, label: "3 Steps", content: "Enroll in the course -> Eduma integrates LearnPress for courses and lessons. LearnPress currently is the #1 LMS Plugin available for WordPress, with many exclusive and premium features, serving the best environment for students and providing all the best tools as Certificates, Student Lists, Announcements and Gradebook. Once enroll to the course, LearnPress will take you to the best learning experience ever.Learn More", color: "bg-yellow-500" },
        { id: 4, label: "4 Steps", content: "Start your Learning Progress -> Eduma provides every details and documents needed for your learning. You can start your lessons by clicking it at the content side-bar. Every lessons are prepared with texts, videos, images, presentation, and even audio. All you need to learn, are here with Eduma.", color: "bg-blue-500" },
    ];

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-4 mb-6">
                {steps.map((step) => (
                    <button
                        key={step.id}
                        className={`w-16 h-16 flex items-center justify-center rounded-full text-white font-bold border-4 ${activeStep === step.id ? step.color : "bg-gray-400 border-gray-300"
                            }`}
                        onClick={() => setActiveStep(step.id)}
                    >
                        <div>
                            {step.id}
                        </div>

                    </button>
                ))}
            </div>

            <div className="p-4 bg-white rounded-lg shadow-md w-96 text-center">
                <p className="text-gray-500 font-thin mt-2">
                    {steps.find((step) => step.id === activeStep).content}
                    <br></br>
                    <p className=" btn mt-4 bg-blue-800 text-white ">Learn More</p>
                </p>
            </div>
        </div>
    );
};

export default StepsTabs;
