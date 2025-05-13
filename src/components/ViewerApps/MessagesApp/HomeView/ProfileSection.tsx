import React from "react";

export const ProfileSection: React.FC = () => {
    return (
        <div className="p-5 bg-teal-300 text-center">
            <div className="flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4">
                    {/* User avatar placeholder */}
                    <div className="text-3xl">👻</div>
                </div>
                <div className="text-left">
                    <h2 className="text-lg font-semibold text-white">
                        Insert userName
                    </h2>
                    <div className="flex gap-2 text-sm text-white">
                        <p>3 minutes old</p>
                        <p>•</p>
                        <p>Level 1</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileSection;
