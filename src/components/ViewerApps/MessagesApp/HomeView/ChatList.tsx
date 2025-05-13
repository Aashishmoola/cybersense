import React from "react";
import ChatItem, { TChatItem } from "./ChatItem.tsx";

type TChatListProps = {
    chatListData: TChatItem[];
    onSelectChat: (id: number) => void;
};

export const ChatList: React.FC<TChatListProps> = ({
    chatListData,
    onSelectChat,
}) => {
    return (
        <div className="h-[calc(100%-80px)] overflow-y-auto bg-blue-50 scrollbar-thin scrollbar-thumb-orange-400 scrollbar-track-blue-100">
            {chatListData.map((chatItemData) => (
                <ChatItem
                    key={chatItemData.id.toString()}
                    chatItemData={chatItemData}
                    onClick={() => {
                        onSelectChat(chatItemData.id);
                    }}
                />
            ))}
        </div>
    );
};

export default ChatList;
