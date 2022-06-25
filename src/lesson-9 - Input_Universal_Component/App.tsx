import React, {useState} from "react"
import "./App.css"
import {FullInputUseRef} from "./Components/FullInput(UseRef)";
import {Input} from "./Components/Input";
import {Button} from "./Components/Button";

export const App = () => {
    let [message, setMesaage] = useState([
        {message: "message1"},
        {message: "message2"},
        {message: "message3"},
    ])

    const [title, setTitle] = useState("")
    console.log('Input & Button ' + title)

    const addMessage = (title: string) => {
        setMesaage([{message: title}, ...message])
    }

    const callBackButtonHundler = () => {
        addMessage(title)
        setTitle('')
    }
    return (
        <div className={"App"}>
            {/*<div>*/}
            {/*    <input/>*/}
            {/*    <button>+</button>*/}
            {/*</div>*/}

            <FullInputUseRef callBack={addMessage}/>
            {/*<Input title={title} setTitle={setTitle} callBack={callBackButtonHundler}/>*/}
            {/*<Button name={"+"} callBack={callBackButtonHundler}/>*/}
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    )
}