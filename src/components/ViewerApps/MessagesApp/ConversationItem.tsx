import React from "react";

interface ConversationPreview {
    id: string;
    name: string;
    message: string;
    avatar: string;
}

interface ConversationItemProps {
    conversation: ConversationPreview;
    onClick: () => void;
}

export const ConversationItem: React.FC<ConversationItemProps> = ({
    conversation,
    onClick,
}) => {
    return (
        <div
            className="flex items-center p-4 hover:bg-teal-200 cursor-pointer"
            onClick={onClick}
        >
            <div className="w-12 h-12 rounded-full bg-teal-300 flex items-center justify-center mr-3">
                <span className="text-xl">{conversation.avatar}</span>
            </div>
            <div className="flex-grow">
                <h3 className="font-medium">{conversation.name}</h3>
                <p className="text-sm text-gray-500 truncate">
                    {conversation.message}
                </p>
            </div>
        </div>
    );
};

export default ConversationItem;
