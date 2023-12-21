import React, { MutableRefObject } from "react";
import Button from "./Button";
import buttons from "../constant/buttons";
import { IActionRef } from "../interfaces";

interface IButtonsProps {
  currAction: MutableRefObject<IActionRef>;
}

function Buttons({ currAction }: IButtonsProps) {
  return (
    <div>
      {/* first row  */}
      <div className="flex">
        {buttons.slice(0, 4).map((button) => (
          <Button key={button.id} button={button} currAction={currAction} />
        ))}
      </div>

      {/* second row  */}
      <div className="flex">
        {buttons.slice(4, 7).map((button) => (
          <Button key={button.id} button={button} currAction={currAction} />
        ))}
      </div>

      {/* third row  */}
      <div className="flex">
        {buttons.slice(7, 9).map((button) => (
          <Button key={button.id} button={button} currAction={currAction} />
        ))}
      </div>
    </div>
  );
}

export default Buttons;
