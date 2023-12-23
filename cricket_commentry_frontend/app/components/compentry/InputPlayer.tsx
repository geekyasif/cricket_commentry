"use client";

import React from "react";
import { socket } from "../../services/socket";
import useScoreboard from "../../hooks/useScoreboard";
import { ICurrentPlayerProps } from "@/app/interfaces";

function InputPlayer({ label, value, type }: ICurrentPlayerProps) {
  const { state, dispatch } = useScoreboard();
  const scoreboardId = state?.scoreboard?._id;

  return (
    <div className="w-full text-center flex flex-col items-center gap-2">
      <label
        htmlFor={label}
        className={`flex items-center justify-center font-semibold text-xs py-1 lg:py-0 lg:text-xl text-white rounded h-full w-full  ${
          label === "Striker" ? "bg-green-500" : "bg-yellow-500"
        }`}
      >
        {label}
      </label>

      <input
        id={label}
        className={`border-gray-300 border-2 rounded-md p-1 lg:p-2 text-center lg:mt-2 focus:border-black h-full w-full placeholder:text-xs placeholder:lg:text-base`}
        value={value}
        placeholder="Enter player name..."
        onChange={(e) => dispatch({ type, payload: e.target.value })}
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

export default InputPlayer;
