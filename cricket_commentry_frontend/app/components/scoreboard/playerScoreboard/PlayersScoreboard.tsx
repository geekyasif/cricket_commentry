import React from "react";
import ScoreboardHeader from "../../ScoreboardHeader";
import PlayerScoreboardTableData from "./PlayerScoreboardTableData";

function PlayersScoreboard() {
  return (
    <div className="">
      <ScoreboardHeader title="Player Scoreboard" />
      <PlayerScoreboardTableData />
    </div>
  );
}

export default PlayersScoreboard;
