import React from "react";
import { Players, TeamScoreboard } from "../interfaces";
interface ScoreboardProps {
  team_scoreboard: TeamScoreboard;
  player_scoreboard: Players;
}

function Scoreboard({ team_scoreboard, player_scoreboard }: ScoreboardProps) {
  return (
    <div className="w-[25%]">
      <div className="border-black border-2 p-2 my-2">
        <p>Team Scoreboard</p>
        {Object.keys(team_scoreboard).map((key) => (
          <p key={key}>
            {key}: {team_scoreboard[key]}
          </p>
        ))}
      </div>
      <div className="border-black border-2 p-2 my-2">
        <p>Player Scoreboard</p>
        <p>{JSON.stringify(player_scoreboard)}</p>
      </div>
    </div>
  );
}

export default Scoreboard;
