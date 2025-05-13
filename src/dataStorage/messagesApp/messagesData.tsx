import { TMessage } from "../../components/ViewerApps/MessagesApp/ChatView/MessageItem";
import { getTimeForMessage } from "../../utils/getTimeForMessage";

type TMessageData = {
    id: number;
    messages: TMessage[];
};

const messagesData = (() => {
    const messagesData: TMessageData[] = [
        {
            id: 1,
            messages: [
                {
                    content: "Hey, how's it going?",
                    time: getTimeForMessage(),
                    isSentBySender: false,
                },
                {
                    content: "Good, thanks! How about you?",
                    time: getTimeForMessage(),
                    isSentBySender: true,
                },
            ],
        },
        {
            id: 2,
            messages: [
                {
                    content: "Hey, how's it going?",
                    time: getTimeForMessage(),
                    isSentBySender: false,
                },
                {
                    content: "Good, thanks! How about you?",
                    time: getTimeForMessage(),
                    isSentBySender: true,
                },
            ],
        },
    ];

    function getMessages(id: number) {
        const messages = messagesData.find(
            (messageData) => messageData.id === id,
        )?.messages;
        if (!messages)
            throw new Error(
                `Unable to find id${id.toString()} in chatItemData or messages for id is set to undefined`,
            );

        return messages;
    }

    function createNewMessage(id: number, message: Omit<TMessage, "time">) {
        const messages = getMessages(id);

        messages.push({...message, time: getTimeForMessage()});
    }

    function createNewMessageData(id: number, messages: TMessage[]) {
        const messageData = messagesData.find(
            (messageData) => messageData.id === id,
        );
        if (messageData) {
            throw new Error(`Id: ${id.toString()} already exists`);
        }

        messagesData.push({ id, messages });
    }

    return { getMessages, createNewMessage, createNewMessageData };
})();

export default messagesData;
