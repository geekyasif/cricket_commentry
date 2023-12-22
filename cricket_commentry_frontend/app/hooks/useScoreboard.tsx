"use client";

import { useContext } from "react";
import { ScoreboardContext } from "../context/ScoreboardProvider";

function useScoreboard() {
  const contextValue = useContext(ScoreboardContext);

  if (!contextValue) {
    throw new Error("ScoreboardContext not found!");
  }

  const { state, dispatch } = contextValue;
  return { state, dispatch };
}

export default useScoreboard;
