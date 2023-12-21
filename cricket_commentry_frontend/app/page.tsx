"use client";

import { useRef, useState } from "react";
import { IActionRef, IData } from "./interfaces";
import Button from "./components/Button";
import Scoreboard from "./components/Scoreboard";
import buttons from "./constant/buttons";
import CurrentPlayer from "./components/CurrentPlayer";

const initialState = {
  team_scoreboard: {
    total_runs: 0,
    total_wickets: 0,
    total_wide_balls: 0,
    total_no_balls: 0,
    total_balls: 0,
  },
  players: {},
};

export default function Home() {
  const [data, setData] = useState<IData>(initialState);
  const { team_scoreboard, players } = data;

  const [striker, setStriker] = useState<string>("");
  const [nonstriker, setNonstriker] = useState<string>("");
  const prevAction = useRef<IActionRef>({
    type: "",
    payload: {
      runs: 0,
      ball: 0,
      wicket: 0,
      onstrike: "",
    },
  });
  const currAction = useRef<IActionRef>({
    type: "",
    payload: {
      runs: 0,
      ball: 0,
      wicket: 0,
      onstrike: "",
    },
  });

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
  function swapStrikerNonstriker() {
    setStriker(nonstriker);
    setNonstriker(striker);
  }

  // // updating the scoreboard
  function updateScoreboard() {
    prevAction.current = currAction.current;
    console.log("final value", prevAction.current);
    currAction.current = {
      type: "",
      payload: {
        runs: 0,
        ball: 0,
        wicket: 0,
        onstrike: "",
      },
    };
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
              <CurrentPlayer
                label="Striker"
                value={striker}
                setValue={setStriker}
                setData={setData}
              />
              <CurrentPlayer
                label="Non Striker"
                value={nonstriker}
                setValue={setNonstriker}
                setData={setData}
              />
            </div>

            {buttons.map((button) => (
              <Button
                key={button.id}
                button={button}
                currAction={currAction}
                onStrike={striker}
                swapStrikerNonstriker={swapStrikerNonstriker}
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
