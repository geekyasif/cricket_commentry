import { IActionButtonProps } from "@/app/interfaces";
import React from "react";

function ActionButton({
  title,
  handleFunction,
  bgColorDark,
  bgColorLight,
}: IActionButtonProps) {
  return (
    <button
      className={`text-xs lg:text-base p-4 lg:p-6 lg:m-4 w-full rounded-md  text-white font-bold ${bgColorDark} hover:${bgColorLight} transition-all`}
      onClick={handleFunction}
    >
      {title}
    </button>
  );
}

export default ActionButton;
