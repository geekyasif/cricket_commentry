import React from "react";
import TeamScoreboard from "./TeamScoreboard";
import PlayersScoreboard from "./PlayersScoreboard";

function Scoreboard() {
  return (
    <div className="w-[40%]">
      <TeamScoreboard />
      <PlayersScoreboard />
    </div>
  );
}

export default Scoreboard;
