import React from "react";

interface ICurrentPlayerProps {
  title: string;
  name: string;
}

function CurrentPlayer({ title, name }: ICurrentPlayerProps) {
  return (
    <div className="w-full text-center">
      <p className="font-bold text-xl mb-2">{title}</p>
      <p className="border-black border-2 p-2 font-semibold text-xl rounded-md">
        {name}
      </p>
    </div>
  );
}

export default CurrentPlayer;
