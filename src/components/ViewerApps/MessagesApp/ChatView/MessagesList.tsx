import React from "react";
import MessageItem from "./MessageItem";
import type { TMessage } from "./MessageItem";

type TMessagesListProps = {
    messages: TMessage[];
};

export const MessagesList: React.FC<TMessagesListProps> = ({ messages }) => {
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
