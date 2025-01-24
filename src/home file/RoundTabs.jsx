import React, { useState } from "react";

const StepsTabs = () => {
    const [activeStep, setActiveStep] = useState(1);

    const steps = [
        { id: 1, label: "1 Step", content: "lorem", color: "bg-cyan-400" },
        { id: 2, label: "2 Steps", content: "Content for Step 2", color: "bg-green-500" },
        { id: 3, label: "3 Steps", content: "Content for Step 3", color: "bg-yellow-500" },
        { id: 4, label: "4 Steps", content: "Content for Step 4", color: "bg-blue-500" },
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
                <p className="text-gray-500 mt-2">
                    {steps.find((step) => step.id === activeStep).content}
                </p>
            </div>
        </div>
    );
};

export default StepsTabs;
