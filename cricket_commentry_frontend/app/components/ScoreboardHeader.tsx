import React from "react";

interface IScoreboardHeaderProps {
  title: string;
}

function ScoreboardHeader({ title }: IScoreboardHeaderProps) {
  return <p className="font-semibold text-xl text-center mt-6 mb-4">{title}</p>;
}

export default ScoreboardHeader;
