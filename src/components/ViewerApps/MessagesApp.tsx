import React, { useState } from "react";
import ChatHeader from "./MessagesApp/ChatHeader";
import ConversationItem from "./MessagesApp/ConversationItem";
import ConversationsList from "./MessagesApp/ConversationsList";
import MessageItem from "./MessagesApp/MessageItem";
import MessagesList from "./MessagesApp/MessagesList";
import NavigationIcons from "./MessagesApp/NavigationIcons";
import ProfileSection from "./MessagesApp/ProfileSection";

// Sample data - you can replace with actual data from your app
const sampleConversations = [
    {
        id: "1",
        name: "John Doe",
        message: "Hey, how's it going?",
        avatar: "/avatar1.png",
    },
    {
        id: "2",
        name: "Jane Smith",
        message: "Are we still meeting tomorrow?",
        avatar: "/avatar2.png",
    },
];

const sampleMessages = [
    {
        id: "1",
        text: "Hey, how's it going?",
        sender: "other",
        timestamp: new Date().toISOString(),
    },
    {
        id: "2",
        text: "Good, thanks! How about you?",
        sender: "me",
        timestamp: new Date().toISOString(),
    },
];

interface Message {
    id: string;
    text: string;
    sender: "me" | "other";
    timestamp: string;
}

interface Conversation {
    id: string;
    name: string;
    message: string;
    avatar: string;
}

const MessagesApp: React.FC = () => {
    const [currentView, setCurrentView] = useState<"conversations" | "chat">(
        "conversations",
    );
    const [currentConversation, setCurrentConversation] =
        useState<Conversation | null>(null);
    const [conversations, setConversations] =
        useState<Conversation[]>(sampleConversations);
    const [messages, setMessages] = useState<Message[]>(sampleMessages);
    const [activeNavItem, setActiveNavItem] = useState("messages");

    const handleSelectConversation = (id: string) => {
        const selected = conversations.find((conv) => conv.id === id) || null;
        setCurrentConversation(selected);
        setCurrentView("chat");
        // Here you would typically load messages for this conversation
    };

    const handleBackToConversations = () => {
        setCurrentView("conversations");
        setCurrentConversation(null);
    };

    const handleSendMessage = (text: string) => {
        const newMessage: Message = {
            id: Date.now().toString(),
            text,
            sender: "me",
            timestamp: new Date().toISOString(),
        };
        setMessages([...messages, newMessage]);
        // Here you would typically send the message to your backend
    };

    return (
        <div className="flex flex-col h-full border rounded-lg overflow-hidden">
            <div className="flex-shrink-0 border-b">
                <NavigationIcons
                    activeItem={activeNavItem}
                    setActiveItem={setActiveNavItem}
                />
            </div>

            {currentView === "conversations" ? (
                <>
                    <div className="p-4 border-b">
                        <h1 className="text-xl font-bold">Messages</h1>
                    </div>
                    <ProfileSection />
                    <ConversationsList
                        conversations={conversations}
                        onSelectConversation={handleSelectConversation}
                    />
                </>
            ) : (
                <>
                    <ChatHeader
                        participantName={currentConversation?.name || ""}
                        onBack={handleBackToConversations}
                    />
                    <MessagesList messages={messages} />

                    {/* Message input would go here */}
                    <div className="p-4 border-t">
                        <input
                            className="w-full p-2 border rounded-full"
                            placeholder="Type a message..."
                            onKeyPress={(e) => {
                                if (
                                    e.key === "Enter" &&
                                    e.currentTarget.value.trim()
                                ) {
                                    handleSendMessage(
                                        e.currentTarget.value.trim(),
                                    );
                                    e.currentTarget.value = "";
                                }
                            }}
                        />
                    </div>
                </>
            )}
        </div>
    );
};

export default MessagesApp;
