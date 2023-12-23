import React from "react";
import buttons from "../../constant/buttons";
import { IButtonsProps } from "../../interfaces";
import EventButton from "./EventButton";

function EventButtons({ currAction }: IButtonsProps) {
  return (
    <div className="">
      {/* first row  */}
      <div className="flex gap-2">
        {buttons.slice(0, 4).map((button) => (
          <EventButton
            key={button.id}
            button={button}
            currAction={currAction}
          />
        ))}
      </div>

      {/* second row  */}
      <div className="flex gap-2 my-2 lg:my-0">
        {buttons.slice(4, 7).map((button) => (
          <EventButton
            key={button.id}
            button={button}
            currAction={currAction}
          />
        ))}
      </div>

      {/* third row  */}
      <div className="flex gap-2 mb-2 lg:mb-0">
        {buttons.slice(7, 9).map((button) => (
          <EventButton
            key={button.id}
            button={button}
            currAction={currAction}
          />
        ))}
      </div>
    </div>
  );
}

export default EventButtons;
