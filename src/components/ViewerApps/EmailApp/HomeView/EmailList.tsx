import React from "react";
import EmailItem from "./EmailItem.tsx";
import { TEmail } from "../../EmailApp";

type TEmailListProps = {
    emails: TEmail[];
    onSelectEmail: (id: number) => void;
};

const EmailList: React.FC<TEmailListProps> = ({ emails, onSelectEmail }) => {
    // If no emails are available, show a message
    if (emails.length === 0) {
        return (
            <div className="flex-1 p-4 flex items-center justify-center text-gray-500">
                No emails available
            </div>
        );
    }

    return (
        <div className="flex-1 overflow-auto">
            {emails.map((email) => (
                <EmailItem 
                    key={email.id} 
                    email={email} 
                    onSelect={() => {onSelectEmail(email.id)}} 
                />
            ))}
        </div>
    );
};

export default EmailList;
