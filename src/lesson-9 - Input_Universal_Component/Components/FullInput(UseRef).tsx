import React, {KeyboardEvent, useRef} from "react";

type FullInputPropsType = {
    callBack(title: string): void
}

export const FullInputUseRef = ({callBack}: FullInputPropsType) => {
    // const [title, setTitle] = useState("")
    // console.log("FullInputUseRef: " + title)

    let myRef = useRef<HTMLInputElement>(null)


    // const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     setTitle(e.currentTarget.value)
    // }

    const onClickButtonHandler = () => {
        if (myRef.current) {
            callBack(myRef.current.value)
            myRef.current.value = ""
            // setTitle("")
        }

    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onClickButtonHandler()
        }
    }

    return (
        <div>
            <input
                // value={title}
                ref={myRef}
                onKeyPress={onKeyPressHandler}
                // onChange={onChangeInputHandler}
            />
            <button onClick={onClickButtonHandler}>+
            </button>
        </div>
    )
}