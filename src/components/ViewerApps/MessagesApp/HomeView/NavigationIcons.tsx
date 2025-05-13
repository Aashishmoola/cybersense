import React from "react";

export const NavigationIcons: React.FC = () => {
    return (
        <div className="flex justify-center p-4 border-b border-teal-200">
            <div className="flex space-x-8">
                <button className="text-teal-500">🌍</button>
                <button className="text-teal-500 border-b-2 border-teal-500">
                    💬
                </button>
                <button className="text-teal-500">🏪</button>
                <button className="text-teal-500">⚙️</button>
            </div>
        </div>
    );
};

export default NavigationIcons;
