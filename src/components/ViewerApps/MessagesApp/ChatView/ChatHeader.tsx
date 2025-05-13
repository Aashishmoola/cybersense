import React from "react";

interface ChatHeaderProps {
    receiverName: string;
    onBack: () => void;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({
    receiverName,
    onBack,
}) => {
    return (
        <div className="p-4 border-b flex items-center">
            <button className="text-teal-500 mr-4" onClick={onBack}>
                ←
            </button>
            <h2 className="font-semibold">{receiverName}</h2>
        </div>
    );
};

export default ChatHeader;
