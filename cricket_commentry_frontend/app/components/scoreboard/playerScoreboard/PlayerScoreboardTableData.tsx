"use client";

import React from "react";
import useScoreboard from "../../../hooks/useScoreboard";

function PlayerScoreboardTableData() {
  const { state } = useScoreboard();
  const { scoreboard } = state;
  const { players } = scoreboard;
  return (
    <div className="overflow-scroll lg:overflow-auto">
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
              className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center"
            >
              Runs
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center"
            >
              Review
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {Object.keys(players).map(
            (player, index) =>
              players[player].review === "striker" && (
                <tr key={player}>
                  <td className="px-6 py-4 whitespace-nowrap">{1}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    {player.toUpperCase()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    {players[player].runs}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <p className="bg-green-500 text-white inline p-2 rounded-md text-xs">
                      Striker
                    </p>
                  </td>
                </tr>
              )
          )}
          {Object.keys(players).map(
            (player, index) =>
              players[player].review === "nonstriker" && (
                <tr key={player}>
                  <td className="px-6 py-4 whitespace-nowrap">{2}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    {player.toUpperCase()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    {players[player].runs}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <p className="bg-yellow-500 text-white inline p-2 rounded-md text-xs">
                      Non striker
                    </p>
                  </td>
                </tr>
              )
          )}
          {Object.keys(players).map(
            (player, index) =>
              players[player].review !== "nonstriker" &&
              players[player].review !== "striker" && (
                <tr key={player}>
                  <td className="px-6 py-4 whitespace-nowrap">{index + 3}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    {player.toUpperCase()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    {players[player].runs}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <p className="bg-red-500 text-white inline p-2 rounded-md text-xs">
                      Played
                    </p>
                  </td>
                </tr>
              )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default PlayerScoreboardTableData;
