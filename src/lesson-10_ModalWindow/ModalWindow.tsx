import React from "react";

type PropsType = {
    title: string
}

// export const ModalWindow: React.FC<PropsType> = ({title, children}) => {
export const ModalWindow: React.FC<PropsType> = (props) => {
    const {title, children} = props

    return (
        <div>
            <h1>{title}</h1>
            <input type="text"/>
            <input type="text"/>
            {children}
            <div>
                <button>Yes</button>
                <button>No</button>
            </div>
        </div>
    );
};

