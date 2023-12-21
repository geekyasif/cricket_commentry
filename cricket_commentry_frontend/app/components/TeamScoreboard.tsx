"use client";

import React from "react";
import ScoreboardHeader from "./ScoreboardHeader";
import useScoreboard from "../hooks/useScoreboard";

// Assuming ITeamScoreboard is an interface defining the structure of team_scoreboard
interface ITeamScoreboard {
  _id: string;
  total_runs: number;
  total_wickets: number;
  total_wide_balls: number;
  total_no_balls: number;
  total_balls: number;
}

function TeamScoreboard() {
  const { state } = useScoreboard();
  const { scoreboard } = state;
  const team_scoreboard: ITeamScoreboard = scoreboard.team_scoreboard;

  return (
    <div className="">
      <ScoreboardHeader title="Team Scoreboard" />
      <div className="border-black border-2 p-6 my-2 rounded-md">
        {Object?.keys(team_scoreboard)?.map((key) => (
          <p key={key}>
            <span className="font-bold">{key.split("_").join(" ")}</span>:{" "}
            {team_scoreboard[key as keyof ITeamScoreboard]}
          </p>
        ))}
      </div>
    </div>
  );
}

export default TeamScoreboard;
