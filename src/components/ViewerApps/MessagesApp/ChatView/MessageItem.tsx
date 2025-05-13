import React from "react";
export type {TMessage}

type TMessage = {
    content: string;
    time: string;
    isSentBySender: boolean;
}

type TMessageItemProps = {
    message: TMessage;
}

const MessageItem: React.FC<TMessageItemProps> = ({ message }) => {
    // There is some toggling between classes depending of message is sent
    return (
        <div className={`flex ${message.isSentBySender ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-xs rounded-lg p-3 ${message.isSentBySender ? "bg-teal-300 text-white" : "bg-gray-200"}`}>
                <p>{message.content}</p>
                <p className="text-xs mt-1 opacity-70">{message.time}</p>
            </div>
        </div>
    );
};

export default MessageItem;
