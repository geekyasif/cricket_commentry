"use client";

import React from "react";
import ScoreboardHeader from "./ScoreboardHeader";
import useScoreboard from "../hooks/useScoreboard";

function PlayersScoreboard() {
  const { state } = useScoreboard();
  const { scoreboard } = state;
  const { players } = scoreboard;

  return (
    <div className="">
      <ScoreboardHeader title="Player Scoreboard" />
      <div className="rounded-md overflow-auto">
        <table className="min-w-full divide-y divide-gray-200 border-gray-100 border-2">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Player
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Runs
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {Object.keys(players).map((player, index) => (
              <tr key={player}>
                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {player.toUpperCase()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {players[player].runs}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PlayersScoreboard;
