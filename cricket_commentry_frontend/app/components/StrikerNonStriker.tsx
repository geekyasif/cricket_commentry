"use client";

import React from "react";
import InputPlayer from "./InputPlayer";
import useScoreboard from "../hooks/useScoreboard";

function StrikerNonStriker() {
  const { state } = useScoreboard();
  const { nonStriker, striker } = state;
  return (
    <div className="flex gap-2 my-6 w-full p-3 flex-wrap lg:flex-nowrap">
      <InputPlayer label="Striker" value={striker} type="set_striker" />
      <InputPlayer
        label="Non Striker"
        value={nonStriker}
        type="set_nonStriker"
      />
    </div>
  );
}

export default StrikerNonStriker;
