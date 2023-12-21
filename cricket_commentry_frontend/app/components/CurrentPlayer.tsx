import React from "react";
import { socket } from "../services/socket";
import useScoreboard from "../hooks/useScoreboard";

interface ICurrentPlayerProps {
  label: string;
  value: string;
  type: string;
}

function CurrentPlayer({ label, value, type }: ICurrentPlayerProps) {
  const { state, dispatch } = useScoreboard();
  const scoreboardId = state?.scoreboard?._id;

  return (
    <div className="w-full text-center">
      <label htmlFor={label} className="font-bold text-xl mb-2">
        {label}
      </label>
      <br />
      <input
        id={label}
        className={`border-gray-300 border-2 rounded-md p-2 text-center mt-2 focus:border-black`}
        value={value}
        placeholder="Enter player name..."
        onChange={(e) => dispatch({ type: type, payload: e.target.value })}
        onBlur={() => {
          if (value) {
            const newPlayer = {
              [value]: {
                runs: 0,
                review: "",
              },
            };
            if (label === "Striker") {
              newPlayer[value].review = "striker";
            }
            if (label === "Non Striker") {
              newPlayer[value].review = "nonstriker";
            }

            // socket or api call to save the player data to the database
            socket.emit("add-new-player", { scoreboardId, newPlayer });
          }
        }}
      />
    </div>
  );
}

export default CurrentPlayer;

// import React, { Dispatch, SetStateAction } from "react";
// import { IData } from "../interfaces";
// import { socket } from "../services/socket";
// import useScoreboard from "../hooks/useScoreboard";

// interface ICurrentPlayerProps {
//   label: string;
//   value: string;
//   setValue: Dispatch<SetStateAction<string>>;
//   placeholder?: string;
//   className?: string;
//   setData: Dispatch<SetStateAction<IData>>;
//   scoreboardId: string;
// }

// function CurrentPlayer({
//   label,
//   value,
//   setValue,
//   setData,
//   scoreboardId,
//   placeholder = "Enter player name...",
//   className = "",
// }: ICurrentPlayerProps) {
//   const { state, dispatch } = useScoreboard();
//   return (
//     <div className="w-full text-center">
//       <label htmlFor={label} className="font-bold text-xl mb-2">
//         {label}
//       </label>
//       <br />
//       <input
//         id={label}
//         className={`border-gray-300 border-2 rounded-md p-2 text-center mt-2 focus:border-black w-full ${className}`}
//         value={label === "Striker" ? state.striker : state.nonStriker}
//         placeholder={placeholder}
//         onChange={(e) => {
//           if (label === "Striker") {
//             dispatch({ type: "set_striker", player: e.target.value });
//           }
//           if (label === "Non Striker") {
//             dispatch({ type: "set_nonStriker", player: e.target.value });
//           }
//           // setValue(e.target.value);
//         }}
//         onBlur={() => {
//           if (value) {
//             console.log(value);
//             const newPlayer = {
//               [value]: {
//                 runs: 0,
//                 review: "",
//               },
//             };
//             if (label === "Striker") {
//               newPlayer[value].review = "striker";
//             }
//             if (label === "Non Striker") {
//               newPlayer[value].review = "nonstriker";
//             }

//             // socket or api call to save the player data to the database
//             socket.emit("add-new-player", { scoreboardId, newPlayer });
//           }
//         }}
//       />
//     </div>
//   );
// }

// export default CurrentPlayer;
