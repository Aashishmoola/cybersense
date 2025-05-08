import ViewerNavigationControls from "../HomePage/ViewerNavigationControls"
import { useRef, useState } from 'react'
import Home from "../ViewerApps/ViewerHome"
import MessagerApp from "../ViewerApps/MessagesApp"
import AmazonLoginPage from "../ViewerApps/AmazonLoginPage"
import EmailApp from "../ViewerApps/EmailApp"

type TEvents = "home" | "email" | "messages" | "amazonLogin"

const eventOrder: readonly TEvents[] = ["home", "email", "amazonLogin", "messages"]
 

export default function Scenario1Viewer(){
    const [currentEvent, setCurrentEvent] = useState<TEvents>("home")
    const eventIndex = useRef(0)

    const renderScenario = () => {
        switch (currentEvent) {
            case "home": 
                return <Home/>
            case "messages": 
                return <MessagerApp/>
            case "amazonLogin":
                return <AmazonLoginPage/>
            case "email":
                return <EmailApp/>
        }
    }

    const incrementEvent = () => {
        if(eventIndex.current === eventOrder.length - 1) return
        setCurrentEvent(eventOrder[++eventIndex.current])   
    }

    const decrementEvent = () => {
        if(eventIndex.current === 0) return
        setCurrentEvent(eventOrder[--eventIndex.current])
    }
    return (
            <div className="bg-blue-200 h-110 w-150 flex flex-col justify-between" >
                {renderScenario()}
                <div className="ml-80">
                    <ViewerNavigationControls incrementEvent = {incrementEvent} decrementEvent = {decrementEvent}/>
                </div>
            </div>
    )
}



