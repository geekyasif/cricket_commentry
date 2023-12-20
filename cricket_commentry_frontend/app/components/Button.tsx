import React, { Dispatch, MutableRefObject, SetStateAction } from "react";
import { IAction } from "../interfaces";

interface IButtonProps {
  title: string | number;
  action: IAction;
  setAction: Dispatch<SetStateAction<IAction>>;
  setActions: MutableRefObject<IAction[]>;
  checkLastBallWasWicket: () => void;
  refStriker: MutableRefObject<string>;
  swapStrikerNonstriker: () => void;
}

function Button({
  title,
  setAction,
  setActions,
  action,
  checkLastBallWasWicket,
  refStriker,
  swapStrikerNonstriker,
}: IButtonProps) {
  return (
    <button
      className="py-2 px-4 m-4 border-black border-2 rounded-md"
      onClick={() => {
        if (action.type === "no_ball") {
          checkLastBallWasWicket();
        }

        action.onstrike = refStriker.current;
        setAction(action);
        console.log("before swap", action);
        setActions.current = [...setActions.current, action];
        if (action.type == 1 || action.type == 3) {
          swapStrikerNonstriker();
        }
      }}
    >
      {title}
    </button>
  );
}

export default Button;
