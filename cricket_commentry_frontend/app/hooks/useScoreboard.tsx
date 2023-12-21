import { useContext } from "react";
import { ScoreboardContext } from "../context/ScoreboardProvider";

function useScoreboard() {
  const contextValue = useContext(ScoreboardContext);

  if (!contextValue) {
    // Handle the case when the context value is undefined
    // You can return a default value, throw an error, or handle it based on your needs
    throw new Error("ScoreboardContext not found!");
  }

  const { state, dispatch } = contextValue;
  return { state, dispatch };
}

export default useScoreboard;
