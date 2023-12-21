import React, { MutableRefObject } from "react";
import { IActionRef } from "../interfaces";

interface IButtonProps {
  button: any;
  currAction: MutableRefObject<IActionRef>;
  onStrike: string;
  swapStrikerNonstriker: () => void;
}

function Button({
  button,
  onStrike,
  swapStrikerNonstriker,
  currAction,
}: IButtonProps) {
  const handleButtonClick = () => {
    const { type } = currAction.current;

    if (type === "") {
      if (button.type === "run") {
        if (button.value === 1 || button.value === 3) {
          swapStrikerNonstriker();
        }
        currAction.current.type = button.type;
        currAction.current.payload = {
          runs: button.value,
          ball: 1,
          onstrike: onStrike,
        };
      }

      if (button.type === "wicket") {
        currAction.current.type = button.type;
        currAction.current.payload = {
          runs: 0,
          ball: 1,
          wicket: 1,
          onstrike: onStrike,
        };
      }

      if (button.type === "wide_ball") {
        currAction.current.type = button.type;
        currAction.current.payload = {
          runs: 1,
          ball: 0,
          onstrike: onStrike,
        };
      }

      if (button.type === "no_ball") {
        currAction.current.type = button.type;
        currAction.current.payload = {
          runs: 1,
          ball: 0,
          onstrike: onStrike,
        };
      }
    } else {
      if (type === "run" && button.type === "run") {
        currAction.current.type = "run";
        currAction.current.payload = {
          runs: button.value,
          ball: 1,
          onstrike: onStrike,
        };
      }

      if (type === "run" && button.type === "no_ball") {
        const { runs } = currAction.current.payload;
        currAction.current.payload = {
          runs: runs + 1,
          ball: 0,
          onstrike: onStrike,
        };
      }

      if (type === "run" && button.type === "wicket") {
        if (currAction.current.payload.runs === 6) {
          currAction.current.payload = {
            runs: 0,
            ball: 1,
            wicket: 1,
            onstrike: onStrike,
          };
        } else {
          let final_run = currAction.current.payload.runs - 1;
          currAction.current.payload = {
            runs: final_run <= 0 ? 0 : final_run,
            ball: 1,
            wicket: 1,
            onstrike: onStrike,
          };
        }
      }

      if (type === "no_ball" && button.type === "run") {
        let final_run = 1 + button.value;
        currAction.current.payload = {
          runs: final_run,
          ball: 0,
          onstrike: onStrike,
        };
      }

      if (type === "wide_ball" && button.type === "run") {
        currAction.current.payload = {
          runs: button.value,
          ball: 0,
          onstrike: onStrike,
        };
      }

      if (type === "wide_ball" && button.type === "no_ball") {
        currAction.current.payload = {
          runs: 1,
          ball: 0,
          onstrike: onStrike,
        };
      }

      if (type === "no_ball" && button.type === "wide_ball") {
        currAction.current.payload = {
          runs: 2,
          ball: 0,
          onstrike: onStrike,
        };
      }

      if (type === "wicket" && button.type === "no_ball") {
        const { runs } = currAction.current.payload;
        currAction.current.payload = {
          runs: runs + 1,
          ball: 0,
          wicket: 0,
          onstrike: onStrike,
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
