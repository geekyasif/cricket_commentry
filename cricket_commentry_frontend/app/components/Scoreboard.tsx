import React from "react";
import TeamScoreboard from "./scoreboard/teamScoreboard/TeamScoreboard";
import PlayersScoreboard from "./scoreboard/playerScoreboard/PlayersScoreboard";

function Scoreboard() {
  return (
    <div className="w-full lg:w-[60%]">
      <TeamScoreboard />
      <PlayersScoreboard />
    </div>
  );
}

export default Scoreboard;
