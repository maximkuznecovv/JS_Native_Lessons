import React, {ChangeEvent, KeyboardEvent, useState} from "react";

type FullInputPropsType = {
    callBack(title: string): void
}

export const FullInput = ({callBack}:FullInputPropsType) => {
    const [title, setTitle] = useState("")

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onClickButtonHandler = () => {

        callBack(title)
        setTitle("")
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onClickButtonHandler()
        }
    }

    return (
        <div>
            <input value={title} onKeyPress={onKeyPressHandler} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+
            </button>
        </div>
    )
}