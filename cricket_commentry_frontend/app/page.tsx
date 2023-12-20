"use client";

import { useEffect, useRef, useState } from "react";
import { Action, Data, Review } from "./interfaces";
import Button from "./components/Button";
import Scoreboard from "./components/Scoreboard";

const buttons = [
  {
    type: 0,
    payload: {
      increment_ball: 1,
      increment_runs: 0,
    },
  },
  {
    type: 1,
    payload: {
      increment_ball: 1,
      increment_runs: 1,
    },
  },
  {
    type: 2,
    payload: {
      increment_ball: 1,
      increment_runs: 2,
    },
  },
  {
    type: 3,
    payload: {
      increment_ball: 1,
      increment_runs: 3,
    },
  },
  {
    type: 4,
    payload: {
      increment_ball: 1,
      increment_runs: 4,
    },
  },
  {
    type: 6,
    payload: {
      increment_ball: 1,
      increment_runs: 6,
    },
  },
  {
    type: "wicket",
    payload: {
      increment_ball: 1,
      increment_wicket: 1,
    },
  },
  {
    type: "no_ball",
    payload: {
      increment_ball: 0,
      increment_runs: 1,
    },
  },
  {
    type: "wide",
    payload: {
      increment_ball: 0,
      increment_runs: 1,
    },
  },
];

export default function Home() {
  const [data, setData] = useState<Data>({
    team_scoreboard: {
      total_runs: 0,
      total_wickets: 0,
      total_wide_balls: 0,
      total_no_balls: 0,
      total_balls: 0,
    },
    players: {
      sachin: {
        runs: 0,
        review: Review.Unplayed,
      },
      dravid: {
        runs: 0,
        review: Review.Unplayed,
      },
    },
  });
  const { team_scoreboard, players } = data;
  const [striker, setStriker] = useState<string>("Sachin");
  const [nonstriker, setNonstriker] = useState<string>("Dravid");

  const [action, setAction] = useState<Action>({
    type: -1,
    payload: { increment_ball: 0, increment_runs: 0 },
  });
  const actions = useRef<Action[]>([]);

  function updatePlayerScore(run: number) {
    setData((prevData) => {
      const { players } = prevData;
      const currentStriker = striker.toLowerCase();

      if (currentStriker in players) {
        return {
          ...prevData,
          players: {
            ...prevData.players,
            [currentStriker]: {
              ...prevData.players[currentStriker],
              runs: prevData.players[currentStriker].runs + run,
            },
          },
        };
      }

      return prevData;
    });
  }

  function swapStrikerNonstriker() {
    setStriker((prevStriker) => {
      setNonstriker((prevNonstriker) => {
        // Swap the values of striker and nonstriker
        const temp = prevStriker;
        return temp;
      });
      // Return the original nonstriker as the new striker
      return nonstriker;
    });
  }

  function updateScoreboard() {
    const values = actions.current.reduce((acc, item) => {
      acc.push(item.type);
      return acc;
    }, []);

    if (values.includes("wicket") && values.includes("no_ball")) {
      const newResult = actions.current.filter(
        (item) => item.type !== "wicket"
      );
      actions.current = newResult;
    }

    actions.current.map((action) => {
      switch (action.type) {
        case 0:
          setData((prevData) => ({
            ...prevData,
            team_scoreboard: {
              ...prevData.team_scoreboard,
              total_balls:
                prevData.team_scoreboard.total_balls +
                action.payload.increment_ball,
            },
          }));
          break;
        case 1:
          setData((prevData) => ({
            ...prevData,
            team_scoreboard: {
              ...prevData.team_scoreboard,
              total_balls:
                prevData.team_scoreboard.total_balls +
                action.payload.increment_ball,
              total_runs:
                prevData.team_scoreboard.total_runs +
                action.payload.increment_runs,
            },
          }));

          updatePlayerScore(action.payload.increment_runs);
          swapStrikerNonstriker();
          break;
        case 2:
          setData((prevData) => ({
            ...prevData,
            team_scoreboard: {
              ...prevData.team_scoreboard,
              total_balls:
                prevData.team_scoreboard.total_balls +
                action.payload.increment_ball,
              total_runs:
                prevData.team_scoreboard.total_runs +
                action.payload.increment_runs,
            },
          }));
          updatePlayerScore(action.payload.increment_runs);
          break;
        case 3:
          setData((prevData) => ({
            ...prevData,
            team_scoreboard: {
              ...prevData.team_scoreboard,
              total_balls:
                prevData.team_scoreboard.total_balls +
                action.payload.increment_ball,
              total_runs:
                prevData.team_scoreboard.total_runs +
                action.payload.increment_runs,
            },
          }));
          updatePlayerScore(action.payload.increment_runs);
          swapStrikerNonstriker();
          break;
        case 4:
          setData((prevData) => ({
            ...prevData,
            team_scoreboard: {
              ...prevData.team_scoreboard,
              total_balls:
                prevData.team_scoreboard.total_balls +
                action.payload.increment_ball,
              total_runs:
                prevData.team_scoreboard.total_runs +
                action.payload.increment_runs,
            },
          }));
          updatePlayerScore(action.payload.increment_runs);
          break;
        case 6:
          setData((prevData) => ({
            ...prevData,
            team_scoreboard: {
              ...prevData.team_scoreboard,
              total_balls:
                prevData.team_scoreboard.total_balls +
                action.payload.increment_ball,
              total_runs:
                prevData.team_scoreboard.total_runs +
                action.payload.increment_runs,
            },
          }));
          updatePlayerScore(action.payload.increment_runs);
          break;
        case "wicket":
          setData((prevData) => ({
            ...prevData,
            team_scoreboard: {
              ...prevData.team_scoreboard,
              total_balls:
                prevData.team_scoreboard.total_balls +
                action.payload.increment_ball,
              total_wickets:
                prevData.team_scoreboard.total_wickets +
                action.payload.increment_wicket,
            },
          }));
          break;
        case "no_ball":
          setData((prevData) => ({
            ...prevData,
            team_scoreboard: {
              ...prevData.team_scoreboard,
              total_runs:
                prevData.team_scoreboard.total_runs +
                action.payload.increment_runs,
            },
          }));
          updatePlayerScore(action.payload.increment_runs);
          break;
        case "wide":
          setData((prevData) => ({
            ...prevData,
            team_scoreboard: {
              ...prevData.team_scoreboard,
              total_runs:
                prevData.team_scoreboard.total_runs +
                action.payload.increment_runs,
            },
          }));
          updatePlayerScore(action.payload.increment_runs);
          break;
        default:
          break;
      }
    });
    actions.current = [];
  }

  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <div className="container mx-auto flex bg-white p-4">
        <div className="w-[75%]">
          <p className="text-center font-bold my-2">Commentry Buttons</p>

          <div className="flex gap-2 my-6 w-full">
            <div className="w-full">
              <p className="font-bold text-xl">Striker</p>
              <p>{striker}</p>
            </div>
            <div className="w-full">
              <p className="font-bold text-xl">Non Striker</p>
              <p>{nonstriker}</p>
            </div>
          </div>

          {buttons.map((item) => (
            <Button
              key={item.type}
              title={item.type}
              setActions={actions}
              setAction={setAction}
              action={item}
            />
          ))}

          <br />

          <button
            className="p-2 m-4 border-black border-2"
            onClick={updateScoreboard}
          >
            New Ball
          </button>
        </div>

        <Scoreboard
          team_scoreboard={team_scoreboard}
          player_scoreboard={players}
        />
      </div>
    </main>
  );
}
