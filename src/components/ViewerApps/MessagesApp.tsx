import React, { useState, useRef} from "react";

import ChatHeader from "./MessagesApp/ChatView/ChatHeader";
import ChatList from "./MessagesApp/HomeView/ChatList";
import MessagesList from "./MessagesApp/ChatView/MessagesList";
import NavigationIcons from "./MessagesApp/HomeView/NavigationIcons";
import ProfileSection from "./MessagesApp/HomeView/ProfileSection";

import type { TChatItem } from "./MessagesApp/HomeView/ChatItem";

import chatData from "../../dataStorage/messagesApp/chatData";
import messagesData from "../../dataStorage/messagesApp/messagesData";

const MessagesApp: React.FC = () => {
    const [currentView, setCurrentView] = useState<"homeView" | "chatView">(
        "homeView",
    );
    // To refesh the chat View
    const [updateChatView, setUpdateChatView] = useState(false);

    const selectedChatItem = useRef<TChatItem | undefined>(undefined);

    const refreshChatView = () => {
        setUpdateChatView(!updateChatView);
    };

    const handleSelectChat = (id: number) => {
        selectedChatItem.current = chatData.getChatItem(id);
        setCurrentView("chatView");
    };

    const handleBackToHomeView = () => {
        setCurrentView("homeView");
    };

    const handleSendMessage = (
        id: number,
        content: string,
        isSentBySender: boolean = true,
    ) => {
        messagesData.createNewMessage(id, { content, isSentBySender });

        refreshChatView();
    };

    return (
        <div className="flex flex-col h-full border rounded-lg overflow-hidden bg-gray-50">
            <div>
                <div className="p-1 border-b flex justify-center items-center gap-10 bg-teal-500 text-white">
                    <h1 className="text-xl font-bold">Messages App</h1>
                    <NavigationIcons />
                </div>
            </div>

            {currentView === "homeView" ? (
                <>
                    <ProfileSection />
                    <ChatList
                        chatListData={chatData.getChatListData()}
                        onSelectChat={handleSelectChat}
                    />
                </>
            ) : (
                (() => {
                    // Capture the current value in a local variable for type narrowing
                    const chat = selectedChatItem.current;

                    return chat ? (
                        <>
                            <ChatHeader
                                receiverName={chat.name}
                                onBack={handleBackToHomeView}
                            />
                            <MessagesList
                                messages={messagesData.getMessages(chat.id)}
                            />

                            <div className="p-3 border-t bg-white">
                                <input
                                    className="w-full p-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-teal-300"
                                    placeholder="Type a message..."
                                    onKeyUp={(e) => {
                                        if (
                                            e.key === "Enter" &&
                                            e.currentTarget.value.trim()
                                        ) {
                                            handleSendMessage(
                                                chat.id,
                                                e.currentTarget.value.trim(),
                                                true,
                                            );
                                            e.currentTarget.value = "";
                                        }
                                    }}
                                />
                            </div>
                        </>
                    ) : (
                        <div>No chat selected</div>
                    );
                })()
            )}
        </div>
    );
};

export default MessagesApp;
