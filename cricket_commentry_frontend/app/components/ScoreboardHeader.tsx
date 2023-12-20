import React from "react";

interface IScoreboardHeaderProps {
  title: string;
}

function ScoreboardHeader({ title }: IScoreboardHeaderProps) {
  return <p className="font-bold text-center mt-6 mb-2">{title}</p>;
}

export default ScoreboardHeader;
