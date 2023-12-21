"use client";

import React from "react";
import ScoreboardHeader from "./ScoreboardHeader";
import Player from "./Player";
import useScoreboard from "../hooks/useScoreboard";

function PlayerScoreboard() {
  const { state } = useScoreboard();
  const { scoreboard } = state;
  const { players } = scoreboard;

  return (
    <div>
      <ScoreboardHeader title="Player Scoreboard" />
      <div className="border-black border-2 p-6 my-2 rounded-md">
        {Object?.keys(players)?.map((player, index) => (
          <Player key={player} player={player} index={index} />
        ))}
      </div>
    </div>
  );
}

export default PlayerScoreboard;
