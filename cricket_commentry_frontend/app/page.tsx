import Scoreboard from "./components/Scoreboard";
import CommentryButtons from "./components/CommentryButtons";

export default function Home() {
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <div className="container mx-auto flex  p-4 gap-4 bg-white border-black border-2">
        <CommentryButtons />
        <Scoreboard />
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
