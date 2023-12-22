"use client";

import React, { useEffect, useRef } from "react";
import Buttons from "./Buttons";
import { socket } from "../services/socket";
import { IActionRef } from "../interfaces";
import useScoreboard from "../hooks/useScoreboard";
import { initialState } from "../context/ScoreboardProvider";
import StrikerNonStriker from "./StrikerNonStriker";

function CommentryButtons() {
  const { state, dispatch } = useScoreboard();
  const { scoreboard } = state;

  // for storing the current action
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
      socket.emit("clear_striker_input");
      alert("Please enter new player name in striker");
    }

    // clearning the currection action after new ball
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
    const handleUpdatedScoreboard = (data: any) => {
      dispatch({ type: "set_scoreboard", payload: data[0] });
      Object.keys(data[0].players).forEach((player) => {
        if (data[0].players[player].review === "striker") {
          dispatch({ type: "set_striker", payload: player });
        }
        if (data[0].players[player].review === "nonstriker") {
          dispatch({ type: "set_nonStriker", payload: player });
        }
      });
    };
    socket.on("updatedScoreboard", handleUpdatedScoreboard);

    // cleaning the striker input on wicket
    socket.on("striker_input_cleaned", () => {
      dispatch({ type: "set_striker", payload: "" });
    });

    return () => {
      socket.off("updatedScoreboard", handleUpdatedScoreboard);
    };
  }, [dispatch]);

  // clearing the scoreboard from db also
  function clearScoreBoard() {
    socket.emit("clear-scoreboard", scoreboard._id);
    dispatch({ type: "set_scoreboard", payload: initialState.scoreboard });
    dispatch({ type: "set_striker", payload: "" });
    dispatch({ type: "set_nonStriker", payload: "" });
  }

  return (
    <div className="w-[40%] ">
      <p className="text-center font-bold my-2 text-2xl">Commentry Buttons</p>
      <div className="p-4 rounded-md h-full">
        <StrikerNonStriker />
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
