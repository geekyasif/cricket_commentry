"use client";

import React from "react";
import ScoreboardHeader from "./ScoreboardHeader";
import useScoreboard from "../hooks/useScoreboard";

function TeamScoreboard() {
  const { state } = useScoreboard();
  const { scoreboard } = state;
  const { team_scoreboard } = scoreboard;
  return (
    <div className="">
      <ScoreboardHeader title="Team Scoreboard" />
      <div className="border-black border-2 p-6 my-2 rounded-md ">
        {Object?.keys(team_scoreboard)?.map((key) => (
          <p key={key}>
            <span className="font-bold">{key.split("_").join(" ")}</span>:{" "}
            {team_scoreboard[key]}
          </p>
        ))}
      </div>
    </div>
  );
}

export default TeamScoreboard;
