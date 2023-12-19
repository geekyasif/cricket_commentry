"use client";

import { useEffect, useState } from "react";
import { Action, Data, Review } from "./interfaces";
import Button from "./components/Button";

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
      increment_runs: 0,
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

  const { team_scoreboard } = data;

  const [action, setAction] = useState<Action>({
    type: -1,
    payload: { increment_ball: 0, increment_runs: 0 },
  });
  const [actions, setActions] = useState<Action[]>([]);

  useEffect(() => {
    console.log("after setActions", actions);
  }, [actions]);

  function updateScoreboard() {
    const values = actions.reduce((acc, item) => {
      acc.push(item.type);
      return acc;
    }, []);

    if (values.includes("wicket") && values.includes("no_ball")) {
      const newResult = actions.filter((item) => item.type !== "wicket");
      console.log("filtered result", newResult);
      // this is not updating immediatelly
      setActions(newResult);
    }

    actions?.map((action) => {
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
          break;
        default:
          break;
      }
    });
    setActions([]);
    console.log("after cleanup", actions);
  }

  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <div className="container mx-auto flex flex-row bg-white">
        <div className="w-[75%]">
          {buttons.map((item) => (
            <Button
              key={item.type}
              title={item.type}
              setActions={setActions}
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

        <div className="w-[25%]">
          <div className="border-black border-2 p-2 my-2">
            <p>Team Scoreboard</p>
            {Object.keys(team_scoreboard).map((key) => (
              <p key={key}>
                {key}: {team_scoreboard[key]}
              </p>
            ))}
          </div>
          <div className="border-black border-2 p-2 my-2">
            <p>Player Scoreboard</p>
          </div>
        </div>
      </div>
    </main>
  );
}
