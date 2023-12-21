import React, { Dispatch, SetStateAction } from "react";
import { IData } from "../interfaces";

interface ICurrentPlayerProps {
  label: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  placeholder?: string;
  className?: string;
  setData: Dispatch<SetStateAction<IData>>;
}

function CurrentPlayer({
  label,
  value,
  setValue,
  setData,
  placeholder = "Enter player name...",
  className = "",
}: ICurrentPlayerProps) {
  return (
    <div className="w-full text-center">
      <label htmlFor={label} className="font-bold text-xl mb-2">
        {label}
      </label>
      <br />
      <input
        id={label}
        className={`border-gray-300 border-2 rounded-md p-2 text-center mt-2 focus:border-black ${className}`}
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        onBlur={() => {
          if (value) {
            setValue(value);
            setData((prevData) => ({
              ...prevData,
              players: {
                ...prevData.players,
                [value]: {
                  runs: 0,
                  review: "playing",
                },
              },
            }));
          }
        }}
      />
    </div>
  );
}

export default CurrentPlayer;
