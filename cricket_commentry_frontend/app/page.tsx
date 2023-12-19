"use client";

import { useState } from "react";

enum Review {
  Unplayed,
  Played,
  Out,
  Stiker,
  NonStiker,
}

interface TeamScoreboard {
  total_runs: number;
  total_wickets: number;
  total_wide_balls: number;
  total_no_balls: number;
  total_balls: number;
}

interface Player {
  runs: number;
  review: Review;
}

interface Players {
  [key: string]: Player;
}

interface Data {
  team_scoreboard: TeamScoreboard;
  players: Players;
}

interface Payload {
  increment_ball?: number;
  increment_runs?: number;
  increment_wicket?: Number;
  increment_no_ball?: Number;
  increment_wide_ball?: Number;
}

interface Action {
  type: number | string;
  payload: Payload;
}

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

  function updateScoreboard() {
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
  }

  return (
    <main className="w-screen h-screen">
      <div className="container mx-auto flex flex-row bg-white">
        <div className="w-[75%]">
          <button
            className="p-2 m-4 border-black border-2"
            onClick={() => {
              setAction({
                type: 0,
                payload: {
                  increment_ball: 1,
                  increment_runs: 0,
                },
              });

              setActions((prevAction) => [...prevAction, action]);
            }}
          >
            0
          </button>
          <button
            className="p-2 m-4 border-black border-2"
            onClick={() => {
              setAction({
                type: 1,
                payload: {
                  increment_ball: 1,
                  increment_runs: 1,
                },
              });

              setActions((prevAction) => [...prevAction, action]);
            }}
          >
            1
          </button>
          <button
            className="p-2 m-4 border-black border-2"
            onClick={() => {
              setAction({
                type: 2,
                payload: {
                  increment_ball: 1,
                  increment_runs: 2,
                },
              });

              setActions((prevAction) => [...prevAction, action]);
            }}
          >
            2
          </button>
          <button
            className="p-2 m-4 border-black border-2"
            onClick={() => {
              setAction({
                type: 3,
                payload: {
                  increment_ball: 1,
                  increment_runs: 3,
                },
              });
              setActions((prevAction) => [...prevAction, action]);
            }}
          >
            3
          </button>
          <button
            className="p-2 m-4 border-black border-2"
            onClick={() => {
              setAction({
                type: 1,
                payload: {
                  increment_ball: 1,
                  increment_runs: 4,
                },
              });
              setActions((prevAction) => [...prevAction, action]);
            }}
          >
            4
          </button>
          <button
            className="p-2 m-4 border-black border-2"
            onClick={() => {
              setAction({
                type: 6,
                payload: {
                  increment_ball: 1,
                  increment_runs: 6,
                },
              });
              setActions((prevAction) => [...prevAction, action]);
            }}
          >
            6
          </button>
          <button
            className="p-2 m-4 border-black border-2"
            onClick={() => {
              setAction({
                type: "wicket",
                payload: {
                  increment_ball: 1,
                  increment_wicket: 1,
                },
              });
              setActions((prevAction) => [...prevAction, action]);
            }}
          >
            Wicket
          </button>
          <button
            className="p-2 m-4 border-black border-2"
            onClick={() => {
              setAction({
                type: "no_ball",
                payload: {
                  increment_ball: 0,
                  increment_runs: 1,
                },
              });
              setActions((prevAction) => [...prevAction, action]);
            }}
          >
            No Ball
          </button>
          <button
            className="p-2 m-4 border-black border-2"
            onClick={() => {
              setAction({
                type: "wide",
                payload: {
                  increment_ball: 0,
                  increment_runs: 1,
                },
              });
              setActions((prevAction) => [...prevAction, action]);
            }}
          >
            Wide
          </button>
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
