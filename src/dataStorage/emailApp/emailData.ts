import { TEmail } from "../../components/ViewerApps/EmailApp";
import { getTimeForMessage } from "../../utils/getTimeForMessage";
import emailContentData from "./emailContentData.ts";

const emailData = (() => {
    // Initial list of emails
    const emails: TEmail[] = [
        {
            id: 1,
            subject: "Welcome to the Platform",
            sender: "support@company.com",
            senderName: "Support Team",
            receiver: "user@example.com",
            date: getTimeForMessage(),
            isRead: true,
            hasAttachment: false,
            previewText: "Thank you for joining our platform. We're excited to have you on board and..."
        },
        {
            id: 2,
            subject: "Your Account Statement",
            sender: "billing@company.com",
            senderName: "Billing Department",
            receiver: "user@example.com",
            date: getTimeForMessage(),
            isRead: false,
            hasAttachment: true,
            previewText: "Your monthly account statement is now available. Please find attached your..."
        },
        {
            id: 3,
            subject: "Team Meeting Tomorrow",
            sender: "manager@company.com",
            senderName: "Team Manager",
            receiver: "user@example.com",
            date: getTimeForMessage(),
            isRead: true,
            hasAttachment: false,
            previewText: "This is a reminder that we have our weekly team meeting tomorrow at 10:00 AM..."
        },
        {
            id: 4,
            subject: "New Feature Release",
            sender: "product@company.com",
            senderName: "Product Team",
            receiver: "user@example.com",
            date: getTimeForMessage(),
            isRead: false,
            hasAttachment: false,
            previewText: "We're excited to announce the release of our new feature. Starting today, you can..."
        },
        {
            id: 5,
            subject: "Holiday Schedule",
            sender: "hr@company.com",
            senderName: "HR Department",
            receiver: "user@example.com",
            date: getTimeForMessage(),
            isRead: true,
            hasAttachment: true,
            previewText: "Please find attached the holiday schedule for the upcoming year. All employees..."
        }
    ];

    /**
     * Get a single email by ID
     * @param id Email ID
     * @returns Email object or undefined if not found
     */
    function getEmail(id: number): TEmail | undefined {
        return emails.find(email => email.id === id);
    }

    /**
     * Get all emails
     * @returns Array of all emails
     */
    function getAllEmails(): TEmail[] {
        return [...emails];
    }

    /**
     * Mark an email as read
     * @param id Email ID
     */
    function markAsRead(id: number): void {
        const email = emails.find(email => email.id === id);
        if (email) {
            email.isRead = true;
        }
    }

    /**
     * Add a new email to the data store
     * @param email Email object to add
     */
    function addEmail(email: Omit<TEmail, "id">): void {
        const newId = emails.length > 0 ? Math.max(...emails.map(e => e.id)) + 1 : 1;
        emails.push({ ...email, id: newId });
        
        // Create empty content for this email if not exists
        if (!emailContentData.getContent(newId)) {
            emailContentData.addContent(newId, { body: "" });
        }
    }

    return {
        getEmail,
        getAllEmails,
        markAsRead,
        addEmail
    };
})();

export default emailData;
