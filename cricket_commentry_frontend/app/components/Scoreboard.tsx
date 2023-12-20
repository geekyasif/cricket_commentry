import React from "react";
import { IPlayers } from "../interfaces";
import TeamScoreboard from "./TeamScoreboard";
import PlayerScoreboard from "./PlayerScoreboard";
interface IScoreboardProps {
  team_scoreboard: any;
  player_scoreboard: IPlayers;
}

function Scoreboard({ team_scoreboard, player_scoreboard }: IScoreboardProps) {
  return (
    <div className="w-[25%]">
      <TeamScoreboard team_scoreboard={team_scoreboard} />
      <PlayerScoreboard player_scoreboard={player_scoreboard} />
    </div>
  );
}

export default Scoreboard;
