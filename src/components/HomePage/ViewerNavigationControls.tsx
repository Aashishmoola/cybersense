type TViewerNavigationControlsProps = {
    incrementEvent: () => void,
    decrementEvent: () => void,
}


export default function ViewerNavigationControls({incrementEvent, decrementEvent}: TViewerNavigationControlsProps){
    return (
        <div className="bg-blue-300 flex items-center justify-around">
            <button className="bg-yellow-100 p-2"> Home </button>
            <button className="bg-yellow-100 p-2" onClick={decrementEvent}> Back </button>
            <button className="bg-yellow-100 p-2" onClick={incrementEvent}> Next </button>

        </div>
    )
}
