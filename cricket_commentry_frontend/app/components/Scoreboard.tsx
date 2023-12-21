import React from "react";
import { IPlayers } from "../interfaces";
import TeamScoreboard from "./TeamScoreboard";
import PlayerScoreboard from "./PlayerScoreboard";
// interface IScoreboardProps {
//   team_scoreboard: any;
//   player_scoreboard: IPlayers;
// }
// { team_scoreboard, player_scoreboard }: IScoreboardProps

function Scoreboard() {
  return (
    <div className="w-[40%]">
      {/* <TeamScoreboard team_scoreboard={team_scoreboard} />
      <PlayerScoreboard player_scoreboard={player_scoreboard} /> */}
      <TeamScoreboard />
      <PlayerScoreboard />
    </div>
  );
}

export default Scoreboard;
