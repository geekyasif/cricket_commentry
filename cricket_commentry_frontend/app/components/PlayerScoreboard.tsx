import React from "react";
import { IPlayers } from "../interfaces";
import ScoreboardHeader from "./ScoreboardHeader";

interface IPlayerScoreboard {
  player_scoreboard: IPlayers;
}

function PlayerScoreboard({ player_scoreboard }: IPlayerScoreboard) {
  return (
    <div>
      <ScoreboardHeader title="Player Scoreboard" />
      <div className="border-black border-2 p-6 my-2 rounded-md">
        {Object.keys(player_scoreboard).map((player, index) => (
          <p className="my-2 border-b-2 pb-2" key={player}>
            <span className="font-bold">Player {index + 1}:</span>{" "}
            {player.toUpperCase()} <span className="font-bold">Runs:</span>{" "}
            {player_scoreboard[player].runs}
          </p>
        ))}
      </div>
    </div>
  );
}

export default PlayerScoreboard;
