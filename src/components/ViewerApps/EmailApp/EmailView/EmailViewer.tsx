import React from "react";
import { TEmail, TEmailContent } from "../../EmailApp";

type TEmailViewerProps = {
    email: TEmail;
    content: TEmailContent;
};

const EmailViewer: React.FC<TEmailViewerProps> = ({ email, content }) => {
    return (
        <div className="flex-1 overflow-auto p-4 bg-white">
            {/* Email metadata */}
            <div className="mb-4 border-b pb-4">
                <h1 className="text-2xl font-medium text-gray-800 mb-4">
                    {email.subject}
                </h1>

                <div className="flex items-start">
                    {/* Sender avatar */}
                    <div className="mr-4 flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center">
                            {email.senderName.charAt(0).toUpperCase()}
                        </div>
                    </div>

                    {/* Email details */}
                    <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-baseline">
                            <span className="text-base font-medium mr-2">
                                {email.senderName}
                            </span>
                            <span className="text-sm text-gray-500 mr-2">
                                &lt;{email.sender}&gt;
                            </span>
                            <span className="text-sm text-gray-500">
                                {email.date}
                            </span>
                        </div>

                        <div className="text-sm text-gray-600 mt-1">
                            To: {email.receiver}
                        </div>
                    </div>
                </div>
            </div>

            {/* Email body */}
            <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: content.body }}
            />

            {/* Email actions */}
            <div className="mt-6 pt-4 border-t">
                <div className="flex space-x-3">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                        Reply
                    </button>
                    <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
                        Forward
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EmailViewer;
