import React from "react";

type ButtonPropsType = {
    name: string
    callBack: () => void
}

export const Button = (props: ButtonPropsType) => {
    const onClickButtonHandler = () => {
        props.callBack()
        console.log("button")
    }

    return (
        <button onClick={onClickButtonHandler}>{props.name}</button>
    );
};

