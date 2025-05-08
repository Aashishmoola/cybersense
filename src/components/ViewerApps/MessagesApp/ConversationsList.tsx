import React from "react";
import ConversationItem from "./ConversationItem";

interface ConversationPreview {
    id: string;
    name: string;
    message: string;
    avatar: string;
}

interface ConversationsListProps {
    conversations: ConversationPreview[];
    onSelectConversation: (id: string) => void;
}

export const ConversationsList: React.FC<ConversationsListProps> = ({
    conversations,
    onSelectConversation,
}) => {
    return (
        <div className="flex-grow overflow-y-auto">
            {conversations.map((conversation) => (
                <ConversationItem
                    key={conversation.id}
                    conversation={conversation}
                    onClick={() => {
                        onSelectConversation(conversation.id);
                    }}
                />
            ))}
        </div>
    );
};

export default ConversationsList;
