import { useState } from "react";

export default function MessagerApp() {
    const [activeChat, setActiveChat] = useState<string | null>(null);

    // Mock data for UI layout purposes only
    const conversations = [
        {
            id: "1",
            name: "johndoe92",
            message: "Hello mate, how's it going?",
            avatar: "👤",
        },
        {
            id: "2",
            name: "timmyturner",
            message: "It's a bit crowded thought?",
            avatar: "👤",
        },
        {
            id: "3",
            name: "mainoda",
            message: "It's a bit crowded thought?",
            avatar: "👤",
        },
    ];

    // Simple message interface just for layout
    const chatMessages = [
        {
            sender: "johndoe92",
            content: "Hello there? sup?",
            time: "19:30",
            isSent: false,
        },
        {
            sender: "me",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor",
            time: "19:30",
            isSent: true,
        },
        { sender: "me", content: "PINGGG !!!", time: "19:32", isSent: true },
    ];

    return (
        <div className="flex h-full">
            {/* Left sidebar - contacts/conversations list */}
            <div className="w-full md:w-1/3 bg-teal-100 flex flex-col">
                {/* Profile section */}
                <div className="p-6 bg-teal-300 text-center">
                    <div className="flex flex-col items-center">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-2">
                            {/* User avatar placeholder */}
                            <div className="text-4xl">👻</div>
                        </div>
                        <h2 className="text-xl font-semibold text-white">
                            LEGIMIN
                        </h2>
                        <p className="text-sm text-white">3 minutes old</p>
                        <p className="text-sm text-white">Level 1</p>
                    </div>
                </div>

                {/* Navigation icons */}
                <div className="flex justify-center p-4 border-b border-teal-200">
                    <div className="flex space-x-8">
                        <button className="text-teal-500">🌍</button>
                        <button className="text-teal-500 border-b-2 border-teal-500">
                            💬
                        </button>
                        <button className="text-teal-500">🏪</button>
                        <button className="text-teal-500">⚙️</button>
                    </div>
                </div>

                {/* Conversations list */}
                <div className="flex-grow overflow-y-auto">
                    {conversations.map((convo) => (
                        <div
                            key={convo.id}
                            className="flex items-center p-4 hover:bg-teal-200 cursor-pointer"
                        >
                            <div className="w-12 h-12 rounded-full bg-teal-300 flex items-center justify-center mr-3">
                                <span className="text-xl">{convo.avatar}</span>
                            </div>
                            <div className="flex-grow">
                                <h3 className="font-medium">{convo.name}</h3>
                                <p className="text-sm text-gray-500 truncate">
                                    {convo.message}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right chat area */}
            <div className="hidden md:flex flex-col w-2/3 bg-white">
                {/* Chat header */}
                <div className="p-4 border-b flex items-center">
                    <button className="text-teal-500 mr-4">←</button>
                    <h2 className="font-semibold">johndoe92</h2>
                </div>

                {/* Messages area */}
                <div className="flex-grow p-4 overflow-y-auto bg-gray-50">
                    <div className="flex flex-col space-y-4">
                        {chatMessages.map((msg, index) => (
                            <div
                                key={index}
                                className={`flex ${msg.isSent ? "justify-end" : "justify-start"}`}
                            >
                                <div
                                    className={`max-w-xs rounded-lg p-3 ${msg.isSent ? "bg-teal-300 text-white" : "bg-gray-200"}`}
                                >
                                    <p>{msg.content}</p>
                                    <p className="text-xs mt-1 opacity-70">
                                        {msg.time}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Input area */}
                <div className="p-4 border-t flex">
                    <input
                        type="text"
                        placeholder="type something"
                        className="flex-grow p-2 border rounded-lg focus:outline-none focus:border-teal-400"
                    />
                    <button className="ml-2 p-2 text-teal-500">📎</button>
                </div>
            </div>
        </div>
    );
}
