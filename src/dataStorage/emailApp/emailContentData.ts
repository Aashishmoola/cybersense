import { TEmailContent } from "../../components/ViewerApps/EmailApp";

const emailContentData = (() => {
    // Initial content for emails
    const emailContents: Record<number, TEmailContent> = {
        1: {
            body: `<div>
                <p>Dear User,</p>
                <p>Welcome to our platform! We're excited to have you join our community.</p>
                <p>Here are a few tips to get you started:</p>
                <ul>
                    <li>Complete your profile</li>
                    <li>Explore our features</li>
                    <li>Connect with other users</li>
                </ul>
                <p>If you have any questions, feel free to reach out to our support team.</p>
                <p>Best regards,<br>Support Team</p>
            </div>`
        },
        2: {
            body: `<div>
                <p>Dear User,</p>
                <p>Please find attached your monthly account statement for the previous month.</p>
                <p>Summary:</p>
                <ul>
                    <li>Previous Balance: $250.00</li>
                    <li>Current Charges: $125.50</li>
                    <li>Payments: -$250.00</li>
                    <li>Current Balance: $125.50</li>
                </ul>
                <p>If you have any questions about this statement, please contact our billing department.</p>
                <p>Thank you for your business!</p>
                <p>Billing Department</p>
            </div>`
        },
        3: {
            body: `<div>
                <p>Hello Team,</p>
                <p>This is a reminder that we have our weekly team meeting tomorrow at 10:00 AM in Conference Room A.</p>
                <p>Agenda:</p>
                <ul>
                    <li>Project status updates</li>
                    <li>Upcoming deadlines</li>
                    <li>Resource allocation</li>
                    <li>Open discussion</li>
                </ul>
                <p>Please come prepared to discuss your current progress and any blockers you're facing.</p>
                <p>Best regards,<br>Team Manager</p>
            </div>`
        },
        4: {
            body: `<div>
                <p>Dear User,</p>
                <p>We're excited to announce the release of our new feature set! Starting today, you can access the following improvements:</p>
                <ul>
                    <li><strong>Enhanced Dashboard:</strong> New visualizations and customizable widgets</li>
                    <li><strong>Improved Search:</strong> Find what you need faster with our advanced search capabilities</li>
                    <li><strong>Mobile Optimization:</strong> Better experience on all your devices</li>
                </ul>
                <p>We've been working hard on these updates based on your feedback, and we hope they improve your experience.</p>
                <p>Check out the new features by logging in to your account!</p>
                <p>Regards,<br>Product Team</p>
            </div>`
        },
        5: {
            body: `<div>
                <p>Dear Employees,</p>
                <p>Please find attached the holiday schedule for the upcoming year.</p>
                <p>Key dates to note:</p>
                <ul>
                    <li>New Year's Day: January 1</li>
                    <li>Memorial Day: May 30</li>
                    <li>Independence Day: July 4</li>
                    <li>Labor Day: September 5</li>
                    <li>Thanksgiving: November 24-25</li>
                    <li>Winter Holiday: December 24-31</li>
                </ul>
                <p>Please plan your time off accordingly and submit vacation requests at least two weeks in advance.</p>
                <p>Thank you,<br>HR Department</p>
            </div>`
        }
    };

    /**
     * Get content for a specific email
     * @param emailId Email ID
     * @returns Email content or undefined if not found
     */
    function getContent(emailId: number): TEmailContent | undefined {
        return emailContents[emailId];
    }

    /**
     * Add content for an email
     * @param emailId Email ID
     * @param content Email content object
     */
    function addContent(emailId: number, content: TEmailContent): void {
        emailContents[emailId] = content;
    }

    /**
     * Update content for an email
     * @param emailId Email ID
     * @param content Updated email content object
     */
    function updateContent(emailId: number, content: TEmailContent): void {
        if (emailContents[emailId]) {
            emailContents[emailId] = content;
        }
    }

    return {
        getContent,
        addContent,
        updateContent
    };
})();

export default emailContentData;
