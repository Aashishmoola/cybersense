export {getTimeForMessage}

function getTimeForMessage() {
    const date = new Date();
    return `${date.getHours().toString()}:${date.getMinutes().toString()}`;
}