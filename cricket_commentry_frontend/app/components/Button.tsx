import React, { MutableRefObject } from "react";
import useScoreboard from "../hooks/useScoreboard";
import { IActionRef } from "../interfaces";

interface IButtonProps {
  button: any;
  currAction: MutableRefObject<IActionRef>;
}

const Button = ({ button, currAction }: IButtonProps) => {
  const { state, dispatch } = useScoreboard();
  const { striker } = state;

  const handleButtonClick = () => {
    const { type } = currAction.current;

    if (type === "") {
      const commonPayload = { ball: 0, onstrike: striker };
      switch (button.type) {
        case "run":
          if (button.value === 1 || button.value === 3) {
            dispatch({ type: "set_swap_players" });
          }
          currAction.current.payload = { ...commonPayload, runs: button.value };
          break;
        case "wicket":
          currAction.current.payload = { ...commonPayload, runs: 0, wicket: 1 };
          break;
        case "wide_ball":
        case "no_ball":
          currAction.current.payload = { ...commonPayload, runs: 1 };
          break;
        default:
          break;
      }
      currAction.current.type = button.type;
    } else {
      const currentPayload = currAction.current.payload;
      switch (button.type) {
        case "run":
          if (type === "run") {
            if (button.value === 1 || button.value === 3) {
              dispatch({ type: "set_swap_players" });
            }
            currAction.current.payload = {
              ...currentPayload,
              runs: button.value,
            };
          } else if (type === "no_ball") {
            currAction.current.payload = {
              ...currentPayload,
              runs: currentPayload.runs + 1,
            };
          } else if (type === "wicket") {
            const finalRun =
              currentPayload.runs <= 1 ? 0 : currentPayload.runs - 1;
            currAction.current.payload = {
              ...currentPayload,
              runs: finalRun,
              wicket: 1,
            };
          }
          break;
        case "no_ball":
          if (type === "wide_ball") {
            currAction.current.type = "wide_ball_no_ball";
          } else if (type === "run") {
            currAction.current.payload = {
              ...currentPayload,
              runs: currentPayload.runs + 1,
            };
          }
          break;
        case "wide_ball":
          if (type === "no_ball") {
            currAction.current.type = "no_ball_wide_ball";
          } else if (type === "run") {
            currAction.current.payload = {
              ...currentPayload,
              runs: button.value,
            };
          }
          break;
        case "wicket":
          if (type === "no_ball") {
            currAction.current.type = "wicket_no_ball";
            currAction.current.payload = {
              ...currentPayload,
              runs: currentPayload.runs + 1,
              wicket: 0,
            };
          }
          break;
        default:
          break;
      }
    }
  };

  return (
    <button
      className="p-8 m-4 border-black border-2 rounded-md w-full"
      onClick={handleButtonClick}
    >
      {button.title}
    </button>
  );
};

export default Button;

// import React, { MutableRefObject } from "react";
// import { IActionRef } from "../interfaces";
// import useScoreboard from "../hooks/useScoreboard";

// interface IButtonProps {
//   button: any;
//   currAction: MutableRefObject<IActionRef>;
// }

// function Button({ button, currAction }: IButtonProps) {
//   const { state, dispatch } = useScoreboard();
//   const { striker } = state;

//   const handleButtonClick = () => {
//     const { type } = currAction.current;

//     if (type === "") {
//       if (button.type === "run") {
//         if (button.value === 1 || button.value === 3) {
//           dispatch({ type: "set_swap_players" });
//         }
//         currAction.current.type = button.type;
//         currAction.current.payload = {
//           runs: button.value,
//           ball: 1,
//           onstrike: striker,
//         };
//       }

//       if (button.type === "wicket") {
//         currAction.current.type = button.type;
//         currAction.current.payload = {
//           runs: 0,
//           ball: 1,
//           wicket: 1,
//           onstrike: striker,
//         };
//       }

//       if (button.type === "wide_ball") {
//         currAction.current.type = button.type;
//         currAction.current.payload = {
//           runs: 1,
//           ball: 0,
//           onstrike: striker,
//         };
//       }

//       if (button.type === "no_ball") {
//         currAction.current.type = button.type;
//         currAction.current.payload = {
//           runs: 1,
//           ball: 0,
//           onstrike: striker,
//         };
//       }
//     } else {
//       if (type === "run" && button.type === "run") {
//         currAction.current.type = "run";
//         currAction.current.payload = {
//           runs: button.value,
//           ball: 1,
//           onstrike: striker,
//         };
//       }

//       if (type === "run" && button.type === "no_ball") {
//         const { runs } = currAction.current.payload;
//         currAction.current.payload = {
//           runs: runs + 1,
//           ball: 0,
//           onstrike: striker,
//         };
//       }

//       if (type === "run" && button.type === "wicket") {
//         if (currAction.current.payload.runs === 6) {
//           currAction.current.payload = {
//             runs: 0,
//             ball: 1,
//             wicket: 1,
//             onstrike: striker,
//           };
//         } else {
//           let final_run = currAction.current.payload.runs - 1;
//           currAction.current.payload = {
//             runs: final_run <= 0 ? 0 : final_run,
//             ball: 1,
//             wicket: 1,
//             onstrike: striker,
//           };
//         }
//       }

//       if (type === "no_ball" && button.type === "run") {
//         let final_run = 1 + button.value;
//         currAction.current.payload = {
//           runs: final_run,
//           ball: 0,
//           onstrike: striker,
//         };
//       }

//       if (type === "wide_ball" && button.type === "run") {
//         currAction.current.payload = {
//           runs: button.value,
//           ball: 0,
//           onstrike: striker,
//         };
//       }

//       if (type === "wide_ball" && button.type === "no_ball") {
//         currAction.current.type = "wide_ball_no_ball";
//         currAction.current.payload = {
//           runs: 1,
//           ball: 0,
//           onstrike: striker,
//         };
//       }

//       if (type === "no_ball" && button.type === "wide_ball") {
//         currAction.current.type = "no_ball_wide_ball";
//         currAction.current.payload = {
//           runs: 1,
//           ball: 0,
//           onstrike: striker,
//         };
//       }

//       if (type === "wicket" && button.type === "no_ball") {
//         currAction.current.type = "wicket_no_ball";
//         const { runs } = currAction.current.payload;
//         currAction.current.payload = {
//           runs: runs + 1,
//           ball: 0,
//           wicket: 0,
//           onstrike: striker,
//         };
//       }
//     }
//   };

//   return (
//     <button
//       className="p-8 m-4 border-black border-2 rounded-md w-full"
//       onClick={handleButtonClick}
//     >
//       {button.title}
//     </button>
//   );
// }

// export default Button;
