"use client";

import React from "react";
import { socket } from "../services/socket";
import useScoreboard from "../hooks/useScoreboard";

interface ICurrentPlayerProps {
  label: string;
  value: string;
  type: "set_striker" | "set_nonStriker";
}

function InputPlayer({ label, value, type }: ICurrentPlayerProps) {
  const { state, dispatch } = useScoreboard();
  const scoreboardId = state?.scoreboard?._id;

  return (
    <div className="w-full text-center">
      <label
        htmlFor={label}
        className={`font-semibold text-xl px-2 text-white rounded  ${
          label === "Striker" ? "bg-green-500" : "bg-yellow-500"
        }`}
      >
        {label}
      </label>
      <br />
      <input
        id={label}
        className={`border-gray-300 border-2 rounded-md p-2 text-center mt-2 focus:border-black`}
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
