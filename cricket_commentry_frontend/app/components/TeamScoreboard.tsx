import React from "react";
import ScoreboardHeader from "./ScoreboardHeader";

interface ITeamScoreboardProps {
  team_scoreboard: any;
}

function TeamScoreboard({ team_scoreboard }: ITeamScoreboardProps) {
  return (
    <div className="">
      <ScoreboardHeader title="Team Scoreboard" />
      <div className="border-black border-2 p-6 my-2 rounded-md ">
        {Object.keys(team_scoreboard).map((key) => (
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
