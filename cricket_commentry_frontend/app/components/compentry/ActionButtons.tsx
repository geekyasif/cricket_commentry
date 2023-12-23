import React from "react";
import { socket } from "../../services/socket";
import useScoreboard from "../../hooks/useScoreboard";
import { IActionButtonsProps } from "../../interfaces";
import { initialState } from "../../context/ScoreboardProvider";
import ActionButton from "./ActionButton";

function ActionButtons({ currAction }: IActionButtonsProps) {
  const { state, dispatch } = useScoreboard();
  const { scoreboard } = state;

  // updating the scoreboard
  function updateScoreboard() {
    if (!currAction.current.type) {
      alert("Please select some event first!");
      return;
    }

    currAction.current.scoreboardId = scoreboard._id;
    socket.emit("new-ball", currAction.current);

    if (currAction.current.type === "wicket") {
      dispatch({ type: "set_striker", payload: "" });
      socket.emit("clear_striker_input");
      alert("Please enter new player name in striker");
    }

    if (currAction.current.type === "run_wicket") {
      dispatch({ type: "set_nonStriker", payload: "" });
      socket.emit("clear_non_striker_input");
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
        wide_ball: 0,
        no_ball: 0,
        onstrike: "",
      },
    };
  }

  // clearing the scoreboard from db also
  function clearScoreBoard() {
    socket.emit("clear-scoreboard", scoreboard._id);
    dispatch({ type: "set_scoreboard", payload: initialState.scoreboard });
    dispatch({ type: "set_striker", payload: "" });
    dispatch({ type: "set_nonStriker", payload: "" });
  }

  return (
    <div className="flex gap-2">
      <ActionButton
        title="New Ball"
        handleFunction={updateScoreboard}
        bgColorDark="bg-green-500"
        bgColorLight="bg-green-400"
      />
      <ActionButton
        title=" Clear Scoreboard"
        handleFunction={clearScoreBoard}
        bgColorDark="bg-red-500"
        bgColorLight="bg-red-400"
      />
    </div>
  );
}

export default ActionButtons;
