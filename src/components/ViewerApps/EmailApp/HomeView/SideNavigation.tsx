import React from "react";
import IconsSVG from "./IconsSVG";


const SideNavigation: React.FC = () => {
    const navItems = [
        { name: "Inbox", icon: "inbox", count: 5, active: true },
        { name: "Starred", icon: "star", count: 0, active: false },
        { name: "Sent", icon: "paper-plane", count: 0, active: false },
        { name: "Drafts", icon: "file", count: 0, active: false },
        { name: "Spam", icon: "exclamation-circle", count: 0, active: false },
        { name: "Trash", icon: "trash", count: 0, active: false },
    ];
    // Helper function to render the appropriate icon
    const renderIcon = (iconName: string) => {
        switch (iconName) {
            case "inbox":
                return (
                    <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                        />
                    </svg>
                );
            case "star":
                return (
                    <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                        />
                    </svg>
                );
            case "paper-plane":
                return (
                    <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                    </svg>
                );
            case "file":
                return (
                    <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                    </svg>
                );
            case "exclamation-circle":
                return (
                    <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                );
            case "trash":
                return (
                    <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                    </svg>
                );
            default:
                return null;
        }
    };
    return (
        <div className="w-44 bg-gray-100 border-r overflow-y-auto">
            {/* Compose button */}
            <div className="p-2">
                <button className="flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white py-1.5 px-3 rounded-md text-sm">
                    <svg
                        className="w-4 h-4 mr-1.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                        />
                    </svg>
                    <span>Compose</span>
                </button>
            </div>
            {/* Navigation links */}
            <nav className="mt-1">
                <ul>
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <a
                                href="#"
                                className={`flex items-center justify-between px-3 py-1.5 text-sm ${
                                    item.active
                                        ? "bg-blue-100 text-blue-700"
                                        : "hover:bg-gray-200"
                                }`}
                            >
                                <div className="flex items-center">
                                    <span className="mr-2 text-gray-600">
                                        <IconsSVG iconName={item.icon}/>
                                    </span>
                                    <span>{item.name}</span>
                                </div>

                                {/* Conditional render of itemcount */}

                                {item.count > 0 && (
                                    <span className="px-1.5 py-0.5 text-xs bg-blue-600 text-white rounded-full">
                                        {item.count}
                                    </span>
                                )}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default SideNavigation;
