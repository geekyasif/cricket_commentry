"use client";

import React from "react";
import useScoreboard from "../../../hooks/useScoreboard";
import { ITeamScoreboard } from "@/app/interfaces";

function TeamScoreboardTableData() {
  const { state } = useScoreboard();
  const { scoreboard } = state;
  const team_scoreboard: ITeamScoreboard = scoreboard.team_scoreboard;

  return (
    <div className="overflow-scroll lg:overflow-auto">
      <table className="w-full divide-y divide-gray-200 border-gray-100 border-2">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Total Runs
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Total Balls
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Total Wickets
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Total Wide Balls
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Total No Balls
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">
              <p className="text-center">{team_scoreboard.total_runs}</p>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <p className="text-center">{team_scoreboard.total_balls}</p>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <p className="text-center">{team_scoreboard.total_wickets}</p>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <p className="text-center">{team_scoreboard.total_wide_balls}</p>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <p className="text-center">{team_scoreboard.total_no_balls}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TeamScoreboardTableData;
