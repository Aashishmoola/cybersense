import React from "react";
import { TEmail } from "../../EmailApp";

type TEmailItemProps = {
    email: TEmail;
    onSelect: () => void;
};

const EmailItem: React.FC<TEmailItemProps> = ({ email, onSelect }) => {
    // Format the date (simplified for demo)
    const formattedDate = email.date;

    return (
        <div
            className={`p-3 border-b cursor-pointer hover:bg-gray-100 flex items-center ${!email.isRead ? "font-semibold bg-blue-50" : ""
                }`}
            onClick={onSelect}
        >
            <div className="mr-3 flex-shrink-0">
                {/* Avatar circle with first letter of sender name */}
                <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center">
                    {email.senderName.charAt(0).toUpperCase()}
                </div>
            </div>

            <div className="flex-grow min-w-0">
                <div className="flex justify-between">
                    <div className="text-sm font-medium truncate">{email.senderName}</div>
                    <div className="text-xs text-gray-500">{formattedDate}</div>
                </div>

                <div className="text-sm font-medium truncate">{email.subject}</div>

                <div className="text-sm text-gray-600 truncate">
                    {email.previewText}
                </div>
            </div>

            {email.hasAttachment && (
                <div className="ml-2 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd" />
                    </svg>
                </div>
            )}
        </div>
    );
};

export default EmailItem;
