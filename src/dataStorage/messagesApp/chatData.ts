import messagesData from "./messagesData";

import { TChatItem } from "../../components/ViewerApps/MessagesApp/HomeView/ChatItem.tsx";
import { TMessage } from "../../components/ViewerApps/MessagesApp/ChatView/MessageItem.tsx";

// TODO: Instead of interfacing between chatData and messagesData, they should be stored within the same object data structure

const chatData = (() => {
    const chatData: TChatItem[] = [
        {
            id: 1,
            name: "John Doe",
            previewMessage: "TestMessage1",
            avatar: "👩",
        },
        {
            id: 2,
            name: "Jane Smith",
            previewMessage: "testMessage2",
            avatar: "👩",
        },
    ];

    function createNewChatItem(
        chatItem: TChatItem,
        messages: TMessage[] = [],
    ) {
        const newId = ++chatData.length;
        messagesData.createNewMessageData(newId, messages);
        chatData.push(chatItem);
    }

    function getChatItem(id: number){
        const chatDataItem = chatData.find((chatDataItem) => chatDataItem.id === id)
        if (!chatDataItem) throw new Error(`chatDataItem with id ${id.toString()} does not exist.`)

        return chatDataItem
    }

    function getChatListData() {
        return chatData
    }

    return { createNewChatItem, getChatItem, getChatListData};
})();

export default chatData;
