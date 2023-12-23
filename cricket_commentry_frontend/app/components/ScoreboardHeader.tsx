import React from "react";
import { IScoreboardHeaderProps } from "../interfaces";

function ScoreboardHeader({ title }: IScoreboardHeaderProps) {
  return <p className="font-semibold text-xl text-center mt-6 mb-4">{title}</p>;
}

export default ScoreboardHeader;
