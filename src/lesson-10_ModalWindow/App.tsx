import React from "react";
import {ModalWindow} from "./ModalWindow";

export const App = () => {
    return (
        <div>
            <ModalWindow title={"Window 1"}>
                <input type="text"/>
                <input type="checkbox"/>
                <input type="time"/>
            </ModalWindow>

            <ModalWindow title={"Window 2"}>
                <div>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                </div>
                <input type="time"/>
            </ModalWindow>
        </div>
    );
};

