"use client";

import React from "react";
import useScoreboard from "../../hooks/useScoreboard";
import { IActionRef, IButtonProps } from "../../interfaces";
import { socket } from "../../services/socket";

const EventButton = ({ button, currAction }: IButtonProps) => {
  const { state } = useScoreboard();
  const { striker, nonStriker } = state;

  function swapPlayers() {
    socket.emit("set_swap_players", {
      scoreboardId: state.scoreboard._id,
      striker,
      nonStriker,
    });
  }

  function emitEvent(event: IActionRef) {
    socket.emit("save_event_to_db", event);
  }

  const handleButtonClick = () => {
    currAction.current.scoreboardId = state.scoreboard._id;
    const { type } = currAction.current;

    if (type === "") {
      const commonPayload = { ball: 0, onstrike: striker };
      switch (button.type) {
        case "run":
          if (button.value === 1 || button.value === 3) {
            swapPlayers();
          }
          currAction.current.payload = {
            ...commonPayload,
            runs: button.value,
            ball: 1,
          };
          break;
        case "wicket":
          currAction.current.payload = {
            ...commonPayload,
            runs: 0,
            wicket: 1,
            ball: 1,
          };
          break;
        case "wide_ball":
          currAction.current.payload = {
            ...commonPayload,
            runs: 1,
            ball: 0,
            wide_ball: 1,
          };
          break;
        case "no_ball":
          currAction.current.payload = {
            ...commonPayload,
            runs: 1,
            ball: 0,
            no_ball: 1,
          };
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
            let finalRun = 0;

            if (
              currentPayload.runs <= 1 ||
              currentPayload.runs === 4 ||
              currentPayload.runs === 6
            ) {
              finalRun = 0;
            }
            if (currentPayload.runs >= 2 && currentPayload.runs <= 3) {
              finalRun = currentPayload.runs - 1;
            }
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
          } else if (type === "wicket") {
            currAction.current.type = "no_ball_wicket";
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
          if (type === "run") {
            currAction.current.type = "run_wicket";
            let finalRun = 0;

            if (
              currentPayload.runs <= 1 ||
              currentPayload.runs === 4 ||
              currentPayload.runs === 6
            ) {
              finalRun = 0;
            }
            if (currentPayload.runs >= 2 && currentPayload.runs <= 3) {
              finalRun = currentPayload.runs - 1;
            }
            currAction.current.payload = {
              ...currentPayload,
              runs: finalRun,
              wicket: 1,
            };
          }
          break;
        default:
          break;
      }
    }

    emitEvent(currAction.current);
  };

  return (
    <div className="w-full">
      <button
        className="p-4 lg:p-6 lg:m-4 shadow border rounded-md hover:shadow-md w-full"
        onClick={handleButtonClick}
      >
        {button.title}
      </button>
    </div>
  );
};

export default EventButton;
