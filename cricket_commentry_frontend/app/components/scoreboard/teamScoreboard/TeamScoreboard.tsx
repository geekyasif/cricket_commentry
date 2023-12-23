import React from "react";
import ScoreboardHeader from "../../ScoreboardHeader";
import TeamScoreboardTableData from "./TeamScoreboardTableData";

function TeamScoreboard() {
  return (
    <div className="">
      <ScoreboardHeader title="Team Scoreboard" />
      <TeamScoreboardTableData />
    </div>
  );
}

export default TeamScoreboard;
