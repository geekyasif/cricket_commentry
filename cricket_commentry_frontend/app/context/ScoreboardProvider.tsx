"use client";

import React, {
  Dispatch,
  ReactNode,
  createContext,
  useEffect,
  useReducer,
} from "react";
import { IData } from "../interfaces";

export interface IState {
  scoreboard: IData;
  striker: string;
  nonStriker: string;
}

export type Action =
  | { type: "set_scoreboard"; payload: IData }
  | { type: "set_striker" | "set_nonStriker"; payload: string }
  | { type: "set_swap_players" };

interface IScoreboardContext {
  state: IState;
  dispatch: Dispatch<Action>;
}

export const ScoreboardContext = createContext<IScoreboardContext | undefined>(
  undefined
);

const initialState: IState = {
  scoreboard: {
    _id: "",
    __v: 0,
    team_scoreboard: {
      _id: "",
      total_runs: 0,
      total_wickets: 0,
      total_wide_balls: 0,
      total_no_balls: 0,
      total_balls: 0,
    },
    players: {},
  },
  striker: "",
  nonStriker: "",
};

function handleScoreboard(state: IState, action: Action): IState {
  switch (action.type) {
    case "set_scoreboard":
      return {
        ...state,
        scoreboard: action.payload,
      };
    case "set_striker":
      return {
        ...state,
        striker: action.payload,
      };
    case "set_nonStriker":
      return {
        ...state,
        nonStriker: action.payload,
      };
    case "set_swap_players":
      return {
        ...state,
        striker: state.nonStriker,
        nonStriker: state.striker,
      };
    default:
      return state;
  }
}

interface IScoreboardProviderProps {
  children: ReactNode;
}

function ScoreboardProvider({ children }: IScoreboardProviderProps) {
  const [state, dispatch] = useReducer(handleScoreboard, initialState);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/scoreboard");
        const data = await response.json();

        if (data.data && data.data.length > 0) {
          dispatch({ type: "set_scoreboard", payload: data.data[0] });

          // setting the striker and non striker in input field
          Object.keys(data.data[0].players).forEach((player) => {
            if (data.data[0].players[player].review === "striker") {
              dispatch({ type: "set_striker", payload: player });
            }
            if (data.data[0].players[player].review === "nonstriker") {
              dispatch({ type: "set_nonStriker", payload: player });
            }
          });
        }
      } catch (error) {
        console.error("Error fetching initial data:", error);
      }
    };

    fetchInitialData();
  }, []);

  return (
    <ScoreboardContext.Provider value={{ state, dispatch }}>
      {children}
    </ScoreboardContext.Provider>
  );
}

export default ScoreboardProvider;
