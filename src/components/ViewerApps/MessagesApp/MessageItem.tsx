import React from "react";

interface Message {
    sender: string;
    content: string;
    time: string;
    isSent: boolean;
}

interface MessageItemProps {
    message: Message;
}

export const MessageItem: React.FC<MessageItemProps> = ({ message }) => {
    return (
        <div
            className={`flex ${message.isSent ? "justify-end" : "justify-start"}`}
        >
            <div
                className={`max-w-xs rounded-lg p-3 ${message.isSent ? "bg-teal-300 text-white" : "bg-gray-200"}`}
            >
                <p>{message.content}</p>
                <p className="text-xs mt-1 opacity-70">{message.time}</p>
            </div>
        </div>
    );
};

export default MessageItem;
