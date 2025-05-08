import React from "react";

export const ProfileSection: React.FC = () => {
    return (
        <div className="p-6 bg-teal-300 text-center">
            <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-2">
                    {/* User avatar placeholder */}
                    <div className="text-4xl">👻</div>
                </div>
                <h2 className="text-xl font-semibold text-white">LEGIMIN</h2>
                <p className="text-sm text-white">3 minutes old</p>
                <p className="text-sm text-white">Level 1</p>
            </div>
        </div>
    );
};

export default ProfileSection;
