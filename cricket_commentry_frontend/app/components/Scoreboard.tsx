import React from "react";
import TeamScoreboard from "./TeamScoreboard";
import PlayerScoreboard from "./PlayerScoreboard";

function Scoreboard() {
  return (
    <div className="w-[40%]">
      <TeamScoreboard />
      <PlayerScoreboard />
    </div>
  );
}

export default Scoreboard;
