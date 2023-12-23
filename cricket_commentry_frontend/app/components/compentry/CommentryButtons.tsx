"use client";

import React, { useEffect, useRef } from "react";
import { socket } from "../../services/socket";
import { IActionRef } from "../../interfaces";
import useScoreboard from "../../hooks/useScoreboard";
import StrikerNonStriker from "./StrikerNonStriker";
import ScoreboardHeader from "../ScoreboardHeader";
import ActionButtons from "./ActionButtons";
import EventButtons from "./EventButtons";

function CommentryButtons() {
  const { dispatch } = useScoreboard();

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

  return (
    <div className="w-full lg:w-[40%]">
      <ScoreboardHeader title="Commentry Buttons" />
      <div className="rounded-md h-full">
        <StrikerNonStriker />
        <EventButtons currAction={currAction} />
        <ActionButtons currAction={currAction} />
      </div>
    </div>
  );
}

export default CommentryButtons;
