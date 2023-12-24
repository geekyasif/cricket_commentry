"use client";

import React, { useEffect, useRef, useState } from "react";
import { socket } from "../../services/socket";
import { IActionRef } from "../../interfaces";
import useScoreboard from "../../hooks/useScoreboard";
import StrikerNonStriker from "./StrikerNonStriker";
import ScoreboardHeader from "../ScoreboardHeader";
import ActionButtons from "./ActionButtons";
import EventButtons from "./EventButtons";
import toast, { Toaster } from "react-hot-toast";

function CommentryButtons() {
  const { dispatch } = useScoreboard();
  const [error, setError] = useState<String>("");

  // for storing the current action
  const currAction = useRef<IActionRef>({
    type: "",
    scoreboardId: "",
    payload: {
      runs: 0,
      ball: 0,
      wicket: 0,
      wide_ball: 0,
      no_ball: 0,
      onstrike: "",
    },
  });

  // syncing the currAction so it will be same from any tabs
  useEffect(() => {
    const setCurrentAction = (event: IActionRef) => {
      currAction.current = event;
    };
    socket.on("set_current_action", setCurrentAction);

    return () => {
      socket.off("set_current_action", setCurrentAction);
    };
  }, [currAction.current]);

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
    const strikerInputCleaned = () => {
      dispatch({ type: "set_striker", payload: "" });
    };
    socket.on("striker_input_cleaned", strikerInputCleaned);

    // cleaning the non striker input on wicket
    const nonStrikerInputCleaned = () => {
      dispatch({ type: "set_nonStriker", payload: "" });
    };
    socket.on("nonstriker_input_cleaned", nonStrikerInputCleaned);

    return () => {
      socket.off("updatedScoreboard", handleUpdatedScoreboard);
      socket.off("striker_input_cleaned", strikerInputCleaned);
      socket.off("nonstriker_input_cleaned", nonStrikerInputCleaned);
    };
  }, [dispatch]);

  // handling error
  useEffect(() => {
    const handleError = ({
      error,
      message,
    }: {
      error: any;
      message: string;
    }) => {
      console.log(error);
      toast.error(message);
      setError(message);
    };

    socket.on("error", handleError);

    return () => {
      socket.off("error", handleError);
    };
  }, [error]);

  return (
    <div className="w-full lg:w-[40%]">
      <Toaster position="top-right" reverseOrder={false} />
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
