import React from "react";
import MessageItem from "./MessageItem";

interface Message {
    sender: string;
    content: string;
    time: string;
    isSent: boolean;
}

interface MessagesListProps {
    messages: Message[];
}

export const MessagesList: React.FC<MessagesListProps> = ({ messages }) => {
    return (
        <div className="flex-grow p-4 overflow-y-auto bg-gray-50">
            <div className="flex flex-col space-y-4">
                {messages.map((message, index) => (
                    <MessageItem key={index} message={message} />
                ))}
            </div>
        </div>
    );
};

export default MessagesList;
