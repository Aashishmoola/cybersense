import React from "react";

export type { TChatItem };

type TChatItem = {
    id: number;
    name: string;
    previewMessage: string;
    avatar: string;
};

type ChatItemProps = {
    chatItemData: TChatItem;
    onClick: () => void;
};

const ChatItem: React.FC<ChatItemProps> = ({ chatItemData, onClick }) => {
    // Determine what to display in the avatar area
    const renderAvatar = () => {
        // If avatar starts with '/' or 'http', treat as image URL
        if (
            chatItemData.avatar.startsWith("/") ||
            chatItemData.avatar.startsWith("http")
        ) {
            return (
                <img
                    src={chatItemData.avatar}
                    alt={`${chatItemData.name}'s avatar`}
                    className="w-full h-full object-cover rounded-full"
                />
            );
        }
        // If avatar is an emoji or short text, display directly
        else {
            return <span className="text-sm">{chatItemData.avatar}</span>;
        }
    };

    return (
        <div
            className="flex items-center p-2 hover:bg-teal-200 cursor-pointer border-b"
            onClick={onClick}
        >
            <div className="w-8 h-8 rounded-full bg-teal-300 flex items-center justify-center mr-2 overflow-hidden">
                {renderAvatar()}
            </div>
            <div className="flex-grow">
                <h3 className="font-medium text-sm">{chatItemData.name}</h3>
                <p className="text-xs text-gray-500 truncate">
                    {chatItemData.previewMessage}
                </p>
            </div>
        </div>
    );
};

export default ChatItem;
