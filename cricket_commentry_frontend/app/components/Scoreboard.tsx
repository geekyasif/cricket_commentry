import React from "react";
import TeamScoreboard from "./TeamScoreboard";
import PlayersScoreboard from "./PlayersScoreboard";

function Scoreboard() {
  return (
    <div className="w-[60%] overflow-hidden">
      <TeamScoreboard />
      <PlayersScoreboard />
    </div>
  );
}

export default Scoreboard;
