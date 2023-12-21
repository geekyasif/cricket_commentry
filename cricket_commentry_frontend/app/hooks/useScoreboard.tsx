"use client";

import React, { useContext } from "react";
import { ScoreboardContext } from "../context/ScoreboardProvider";

function useScoreboard() {
  const { state, dispatch } = useContext(ScoreboardContext);
  return { state, dispatch };
}

export default useScoreboard;
