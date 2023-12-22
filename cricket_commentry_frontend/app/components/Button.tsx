"use client";

import React, { MutableRefObject } from "react";
import useScoreboard from "../hooks/useScoreboard";
import { IActionRef } from "../interfaces";
import { socket } from "../services/socket";

interface IButtonProps {
  button: any;
  currAction: MutableRefObject<IActionRef>;
}

const Button = ({ button, currAction }: IButtonProps) => {
  const { state, dispatch } = useScoreboard();
  const { striker, nonStriker } = state;

  function swapPlayers() {
    socket.emit("set_swap_players", {
      scoreboardId: state.scoreboard._id,
      striker,
      nonStriker,
    });
  }

  const handleButtonClick = () => {
    const { type } = currAction.current;

    if (type === "") {
      const commonPayload = { ball: 0, onstrike: striker };
      switch (button.type) {
        case "run":
          if (button.value === 1 || button.value === 3) {
            swapPlayers();
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
              swapPlayers();
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
      className="p-8 m-4 shadow border rounded-md lg:w-full hover:shadow-md"
      onClick={handleButtonClick}
    >
      {button.title}
    </button>
  );
};

export default Button;
