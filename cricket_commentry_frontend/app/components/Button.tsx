import React, { MutableRefObject } from "react";
import { IActionRef } from "../page";

interface IButtonProps {
  button: any;
  currAction: MutableRefObject<IActionRef>;
}

function Button({ button, currAction }: IButtonProps) {
  const handleButtonClick = () => {
    const { type } = currAction.current;

    if (type === "") {
      if (button.type === "run") {
        currAction.current.type = button.type;
        currAction.current.payload = {
          runs: button.value,
          ball: 1,
        };
      }

      if (button.type === "wicket") {
        currAction.current.type = button.type;
        currAction.current.payload = {
          runs: 0,
          ball: 1,
          wicket: 1,
        };
      }

      if (button.type === "wide_ball") {
        currAction.current.type = button.type;
        currAction.current.payload = {
          runs: 1,
          ball: 0,
        };
      }

      if (button.type === "no_ball") {
        currAction.current.type = button.type;
        currAction.current.payload = {
          runs: 1,
          ball: 0,
        };
      }
    } else {
      if (type === "run" && button.type === "run") {
        currAction.current.type = "run";
        currAction.current.payload = {
          runs: button.value,
          ball: 1,
        };
      }

      if (type === "run" && button.type === "no_ball") {
        const { runs } = currAction.current.payload;
        currAction.current.payload = {
          runs: runs + 1,
          ball: 0,
        };
      }

      if (type === "run" && button.type === "wicket") {
        let final_run = currAction.current.payload.runs - 1;
        currAction.current.payload = {
          runs: final_run <= 0 ? 0 : final_run,
          ball: 1,
          wicket: 1,
        };
      }

      if (type === "no_ball" && button.type === "run") {
        let final_run = 1 + button.value;
        currAction.current.payload = {
          runs: final_run,
          ball: 0,
        };
      }

      if (type === "wide_ball" && button.type === "run") {
        let final_run = 1 + button.value;
        currAction.current.payload = {
          runs: final_run,
          ball: 0,
        };
      }

      if (type === "wide_ball" && button.type === "no_ball") {
        currAction.current.payload = {
          runs: 2,
          ball: 0,
        };
      }

      if (type === "no_ball" && button.type === "wide_ball") {
        currAction.current.payload = {
          runs: 2,
          ball: 0,
        };
      }

      if (type === "wicket" && button.type === "no_ball") {
        const { runs } = currAction.current.payload;
        currAction.current.payload = {
          runs: runs + 1,
          ball: 0,
          wicket: 0,
        };
      }
    }
  };

  return (
    <button
      className="py-2 px-4 m-4 border-black border-2 rounded-md"
      onClick={handleButtonClick}
    >
      {button.title}
    </button>
  );
}

export default Button;
