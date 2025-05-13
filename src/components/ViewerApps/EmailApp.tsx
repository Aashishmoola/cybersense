import React, { useState, useRef } from "react";

// Import EmailApp components
import EmailHeader from "./EmailApp/HomeView/EmailHeader";
import EmailList from "./EmailApp/HomeView/EmailList";
import SideNavigation from "./EmailApp/HomeView/SideNavigation";
import EmailViewHeader from "./EmailApp/EmailView/EmailViewHeader";
import EmailViewer from "./EmailApp/EmailView/EmailViewer";

// Import data
import emailData from "../../dataStorage/emailApp/emailData";
import emailContentData from "../../dataStorage/emailApp/emailContentData";

// Define types
export type TEmail = {
    id: number;
    subject: string;
    sender: string;
    senderName: string;
    receiver: string;
    date: string;
    isRead: boolean;
    hasAttachment: boolean;
    previewText: string;
};

export type TEmailContent = {
    body: string;
};

export type TView = "homeView" | "emailView";

const EmailApp: React.FC = () => {
    // State for tracking current view (list of emails or single email view)
    const [currentView, setCurrentView] = useState<TView>("homeView");

    // Ref to track which email is currently selected
    const selectedEmail = useRef<TEmail | null>(null);

    // Handle email selection from the list
    const handleSelectEmail = (id: number) => {
        const email = emailData.getEmail(id);
        if (email) {
            selectedEmail.current = email;
            emailData.markAsRead(id);
            setCurrentView("emailView");
        }
    };

    // Handle going back to the email list view
    const handleBackToList = () => {
        setCurrentView("homeView");
    };

    // Get all emails for the list
    const allEmails = emailData.getAllEmails();

    return (
        <div className="flex flex-col h-full border rounded-lg overflow-hidden bg-gray-50">
            {currentView === "homeView" ? (
                // Home view with email list
                <>
                    <EmailHeader />
                    <div className="flex flex-1 overflow-hidden">
                        <SideNavigation />
                        <EmailList
                            emails={allEmails}
                            onSelectEmail={handleSelectEmail}
                        />
                    </div>
                </>
            ) : (
                // Email view with selected email content
                (() => {
                    // Safely access the selected email
                    const email = selectedEmail.current;

                    if (!email) {
                        return <div className="p-4">No email selected</div>;
                    }

                    // Get the email content
                    const content = emailContentData.getContent(email.id);

                    return (
                        <>
                            <EmailViewHeader
                                subject={email.subject}
                                onBack={handleBackToList}
                            />
                            <EmailViewer
                                email={email}
                                content={
                                    content || { body: "No content available" }
                                }
                            />
                        </>
                    );
                })()
            )}
        </div>
    );
};

export default EmailApp;
