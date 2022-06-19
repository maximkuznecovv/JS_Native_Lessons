import {useState} from "react"
import "./App.css"
import {FullInput} from "./Components/FullInput";

export const App = () => {
    let [message, setMesaage] = useState([
        {message: "message1"},
        {message: "message2"},
        {message: "message3"},
    ])

    const addMessage = (title: string) => {
        setMesaage([{message: title}, ...message])
    }
    return (
        <div className={"App"}>
            {/*<div>*/}
            {/*    <input/>*/}
            {/*    <button>+</button>*/}
            {/*</div>*/}

            <FullInput callBack={addMessage}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    )
}