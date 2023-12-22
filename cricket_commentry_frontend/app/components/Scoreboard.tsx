import React from "react";
import TeamScoreboard from "./TeamScoreboard";
import PlayersScoreboard from "./PlayersScoreboard";

function Scoreboard() {
  return (
    <div className="w-full lg:w-[60%]">
      <TeamScoreboard />
      <PlayersScoreboard />
    </div>
  );
}

export default Scoreboard;
