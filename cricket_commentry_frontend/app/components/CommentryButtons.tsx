"use client";

import React, { useEffect, useRef } from "react";
import CurrentPlayer from "./CurrentPlayer";
import Buttons from "./Buttons";
import { socket } from "../services/socket";
import { IActionRef } from "../interfaces";
import useScoreboard from "../hooks/useScoreboard";

function CommentryButtons() {
  const { state, dispatch } = useScoreboard();
  const { nonStriker, scoreboard } = state;

  const currAction = useRef<IActionRef>({
    type: "",
    scoreboardId: "",
    payload: {
      runs: 0,
      ball: 0,
      wicket: 0,
      onstrike: "",
    },
  });

  // updating the scoreboard
  function updateScoreboard() {
    currAction.current.scoreboardId = scoreboard._id;
    socket.emit("new-ball", currAction.current);
    if (currAction.current.type === "wicket") {
      dispatch({ type: "set_striker", payload: "" });
      alert("Please enter new player name in striker");
    }
    currAction.current = {
      type: "",
      scoreboardId: "",
      payload: {
        runs: 0,
        ball: 0,
        wicket: 0,
        onstrike: "",
      },
    };
  }

  // updated score listening here
  useEffect(() => {
    socket.on("updatedScoreboard", (data: any) => {
      dispatch({ type: "set_scoreboard", payload: data[0] });
    });
  }, []);

  function clearScoreBoard() {
    socket.emit("clear-scoreboard", scoreboard._id);
    dispatch({ type: "set_striker", payload: "" });
    dispatch({ type: "set_nonStriker", payload: "" });
  }
  return (
    <div className="w-[60%] ">
      <p className="text-center font-bold my-2 text-2xl">Commentry Buttons</p>
      <div className="p-4 rounded-md h-full">
        <div className="flex gap-2 my-6 w-full p-3">
          <CurrentPlayer
            label="Striker"
            value={state.striker}
            type="set_striker"
          />
          <CurrentPlayer
            label="Non Striker"
            value={nonStriker}
            type="set_nonStriker"
          />
        </div>

        <Buttons currAction={currAction} />

        <div>
          <button
            className="p-8 m-4 border-black border-2 w-full rounded-md"
            onClick={updateScoreboard}
          >
            New Ball
          </button>

          <button
            className="p-8 m-4 border-black border-2 w-full rounded-md"
            onClick={clearScoreBoard}
          >
            Clear Scoreboard
          </button>
        </div>
      </div>
    </div>
  );
}

export default CommentryButtons;
