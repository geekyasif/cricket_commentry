import React, { Dispatch, SetStateAction } from "react";
import { Action } from "../interfaces";

interface ButtonProps {
  title: string | number;
  action: Action;
  setAction: Dispatch<SetStateAction<Action>>;
  setActions: Dispatch<SetStateAction<Action[]>>;
}

function Button({ title, setAction, setActions, action }: ButtonProps) {
  return (
    <button
      className="p-2 m-4 border-black border-2"
      onClick={() => {
        setAction(action);
        setActions((prevAction) => [...prevAction, action]);
      }}
    >
      {title}
    </button>
  );
}

export default Button;
