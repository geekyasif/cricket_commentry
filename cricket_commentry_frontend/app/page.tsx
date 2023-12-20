"use client";

import { useRef, useState } from "react";
import { IAction, IData, IReview } from "./interfaces";
import Button from "./components/Button";
import Scoreboard from "./components/Scoreboard";
import buttons from "./constant/buttons";
import CurrentPlayer from "./components/CurrentPlayer";

export interface IActionRef {
  type: string;
  payload: {
    runs: number;
    ball: number;
    wicket?: number;
  };
}

const initialState = {
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
      review: IReview.Unplayed,
    },
    dravid: {
      runs: 0,
      review: IReview.Unplayed,
    },
  },
};

export default function Home() {
  const [data, setData] = useState<IData>(initialState);
  const { team_scoreboard, players } = data;

  const [striker, setStriker] = useState<string>("Sachin");
  const [nonstriker, setNonstriker] = useState<string>("Dravid");
  const refStriker = useRef("sachin");
  const refNonstriker = useRef("dravid");

  // storing the current actions
  // const [action, setAction] = useState<IAction>({
  //   type: -1,
  //   payload: { increment_ball: 0, increment_runs: 0 },
  //   onstrike: "",
  // });

  // storing all the previous actions
  // const actions = useRef<IAction[]>([]);

  // Updating the player score
  // function updatePlayerScore(run: number, onstrike: string) {
  //   setData((prevData) => {
  //     const { players } = prevData;

  //     if (onstrike in players) {
  //       return {
  //         ...prevData,
  //         players: {
  //           ...prevData.players,
  //           [onstrike]: {
  //             ...prevData.players[onstrike],
  //             runs: prevData.players[onstrike].runs + run,
  //           },
  //         },
  //       };
  //     }
  //     return prevData;
  //   });
  // }

  // // swapping the striker and non striker
  // function swapStrikerNonstriker() {
  //   setStriker(nonstriker);
  //   setNonstriker(striker);
  //   let temp = refStriker.current;
  //   refStriker.current = refNonstriker.current;
  //   refNonstriker.current = temp;
  // }

  // // checking the wicket on no ball and removing from the previous actions
  // function checkLastBallWasWicket() {
  //   const lastBall = actions.current.length - 1;
  //   if (actions.current[lastBall].type === "wicket") {
  //     actions.current.pop();
  //   }
  // }

  const prevAction = useRef<IActionRef>({
    type: "",
    payload: {
      runs: 0,
      ball: 0,
      wicket: 0,
    },
  });
  const currAction = useRef<IActionRef>({
    type: "",
    payload: {
      runs: 0,
      ball: 0,
      wicket: 0,
    },
  });

  // // updating the scoreboard
  function updateScoreboard() {
    console.log("final value", currAction);
    // actions.current.map((action) => {
    //   switch (action.type) {
    //     case 0:
    //       setData((prevData) => ({
    //         ...prevData,
    //         team_scoreboard: {
    //           ...prevData.team_scoreboard,
    //           total_balls:
    //             prevData.team_scoreboard.total_balls +
    //             action.payload.increment_ball,
    //         },
    //       }));
    //       break;
    //     case 1:
    //     case 3:
    //       setData((prevData) => ({
    //         ...prevData,
    //         team_scoreboard: {
    //           ...prevData.team_scoreboard,
    //           total_balls:
    //             prevData.team_scoreboard.total_balls +
    //             action.payload.increment_ball,
    //           total_runs:
    //             prevData.team_scoreboard.total_runs +
    //             action.payload.increment_runs,
    //         },
    //       }));
    //       updatePlayerScore(action.payload.increment_runs, action.onstrike);
    //       break;
    //     case 2:
    //     case 4:
    //     case 6:
    //       setData((prevData) => ({
    //         ...prevData,
    //         team_scoreboard: {
    //           ...prevData.team_scoreboard,
    //           total_balls:
    //             prevData.team_scoreboard.total_balls +
    //             action.payload.increment_ball,
    //           total_runs:
    //             prevData.team_scoreboard.total_runs +
    //             action.payload.increment_runs,
    //         },
    //       }));
    //       updatePlayerScore(action.payload.increment_runs, action.onstrike);
    //       break;
    //     case "wicket":
    //       setData((prevData) => ({
    //         ...prevData,
    //         team_scoreboard: {
    //           ...prevData.team_scoreboard,
    //           total_balls:
    //             prevData.team_scoreboard.total_balls +
    //             action.payload.increment_ball,
    //           total_wickets:
    //             prevData.team_scoreboard.total_wickets +
    //             action.payload.increment_wicket,
    //         },
    //       }));
    //       break;
    //     case "no_ball":
    //       setData((prevData) => ({
    //         ...prevData,
    //         team_scoreboard: {
    //           ...prevData.team_scoreboard,
    //           total_runs:
    //             prevData.team_scoreboard.total_runs +
    //             action.payload.increment_runs,
    //         },
    //       }));
    //       updatePlayerScore(action.payload.increment_runs, action.onstrike);
    //       break;
    //     case "wide":
    //       setData((prevData) => ({
    //         ...prevData,
    //         team_scoreboard: {
    //           ...prevData.team_scoreboard,
    //           total_runs:
    //             prevData.team_scoreboard.total_runs +
    //             action.payload.increment_runs,
    //         },
    //       }));
    //       updatePlayerScore(action.payload.increment_runs, action.onstrike);
    //       break;
    //     default:
    //       break;
    //   }
    // });
    // // cleaning the previous actions on new ball click
    // actions.current = [];
  }

  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <div className="container mx-auto flex  p-4 gap-4 bg-white">
        <div className="w-[75%]">
          <p className="text-center font-bold my-2 text-2xl">
            Commentry Buttons
          </p>
          <div className="p-4 border-black border-2 rounded-md h-full">
            <div className="flex gap-2 my-6 w-full">
              <CurrentPlayer title="Striker" name={striker} />
              <CurrentPlayer title="Non Striker" name={nonstriker} />
            </div>

            {buttons.map((button) => (
              <Button
                key={button.id}
                button={button}
                currAction={currAction}
                // prevAction={prevAction}
                // refStriker={refStriker}
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
        </div>

        <Scoreboard
          team_scoreboard={team_scoreboard}
          player_scoreboard={players}
        />
      </div>
    </main>
  );
}

/*

for 0 run
{
  type: "run",
  runs: 0,
  ball: 1,
  onstrike: "sachin"
}

for 1 run 
swapstriker
{
  type: "run",
  runs: 1,
  ball: 1,
  onstrike: "sachin"
}

for 2 run
{
  type: "run",
  runs: 2,
  balls: 1,
  onstrike: "dravid"
}

for 3 run 
swapstriker
{
  type: "run",
  runs: 3,
  balls: 1,
  onstrike: "sachin"
}

for 4 run 
{
  type: "run",
  runs: 4,
  balls: 1,
  onstrike: "sachin"
}

for 6 run 
{
  type: "run",
  runs: 6,
  balls: 1,
  onstrike: "sachin"
}


----------------------- wide ball ---------------------------
{
  type: "wide_ball",
  runs: 1,
  balls: 0,
  onstrike: "sachin"
}

------------------- wide ball + running -------------------

1
{
  type: "wide_ball_run",
  runs: 1
}

-------------------------- wide ball + no ball ---------------------
{
  type: "wide_noball",
  runs: 2,
  balls: 0,
  onstrike: "sachin"
}

----------------------- wicket + run-----------------------
only wicket
{
  type: "wicket",
  wicket: 1,
  balls: 1,
  onstrike: "sachin"
}
 while running wicket 
 swappstriker
{
  type: "run_wicket",
  wicket: 1,
  balls: 1,
  onstrike: "sachin"
}

2 Runs + Wicket
{
 type: "run_wicket",
  wicket: 1,
  runs: 1,
  balls: 1,
  onstrike: "sachin"
}

3 Runs + Wicket
{
   type: "run_wicket",
  wicket: 1,
  runs: 2,
  balls: 1,
  onstrike: "sachin"
}
----------------------------------- wicket + no_ball -------------------------------

{
  type: "wicket_noball",
  runs: 0,
  wicket: 0,
  balls: 0,
  onstrike: "sachin"
}

--------------------- no ball + runs ----------------
{
  type: "noball",
  runs: 1,
  ball: 0,
  onstrike: "sachin"
}

for 1 running 
swapstriker
{
  type: "noball",
  runs: 2,
  ball: 0,
  onstrike: "sachin"
}

for 2 run
{
  type: "noball",
  runs: 3,
  balls: 0,
  onstrike: "dravid"
}

for 3 run 
swapstriker
{
  type: "noball",
  runs: 4,
  balls: 0,
  onstrike: "sachin"
}

for 4 run 
{
  type: "noball",
  runs: 5,
  balls: 0,
  onstrike: "sachin"
}

for 6 run 
{
  type: "noball",
  runs: 7,
  balls: 0,
  onstrike: "sachin"
}


------------------------- 
*/
