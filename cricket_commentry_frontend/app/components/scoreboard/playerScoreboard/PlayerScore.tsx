"use client";

import React from "react";
import useScoreboard from "../../../hooks/useScoreboard";
import { IPlayerProps } from "@/app/interfaces";

function PlayerScore({ player, index }: IPlayerProps) {
  const { state } = useScoreboard();
  const { scoreboard } = state;
  const { players } = scoreboard;

  return (
    <div className="border-black border-2 p-8 mb-4 rounded-md">
      <p className="text-center">
        <span className="font-bold">Player {index + 1}:</span>{" "}
        {player.toUpperCase()} <span className="font-bold">Runs:</span>{" "}
        {players[player].runs}
      </p>
    </div>
  );
}

export default PlayerScore;
