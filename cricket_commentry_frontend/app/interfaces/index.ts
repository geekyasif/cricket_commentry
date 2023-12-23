import { MutableRefObject } from "react";

export enum IReview {
  Unplayed,
  Played,
  Out,
  Stiker,
  NonStiker,
}

export interface ITeamScoreboard {
  total_runs: number;
  total_wickets: number;
  total_wide_balls: number;
  total_no_balls: number;
  total_balls: number;
  _id: string;
}

export interface IPlayer {
  runs: number;
  review: string;
  _id: string;
}

export interface IPlayers {
  [key: string]: IPlayer;
}

export interface IData {
  _id: string;
  team_scoreboard: ITeamScoreboard;
  players: IPlayers;
  __v: number;
}

export interface IPayload {
  increment_ball?: number;
  increment_runs?: number;
  increment_wicket?: number;
  increment_no_ball?: number;
  increment_wide_ball?: number;
}

export interface IAction {
  type: number | string;
  payload: IPayload | any;
  onstrike: string
}

export interface IActionRef {
  type: string;
  scoreboardId: string;
  payload: {
    runs: number;
    ball: number;
    wicket?: number;
    no_ball?: number;
    wide_ball?: number;
    onstrike?: string;
  };
}



export interface IActionButtonProps {
  title: string;
  handleFunction: () => void;
  bgColorDark: string;
  bgColorLight: string;
}



export interface IActionButtonsProps {
  currAction: MutableRefObject<IActionRef>;
}


export interface IButtonProps {
  button: any;
  currAction: MutableRefObject<IActionRef>;
}

export interface IButtonsProps {
  currAction: MutableRefObject<IActionRef>;
}


export interface ICurrentPlayerProps {
  label: string;
  value: string;
  type: "set_striker" | "set_nonStriker";
}


export interface IPlayerProps {
  player: string;
  index: number;
}

export interface ITeamScoreboard {
  _id: string;
  total_runs: number;
  total_wickets: number;
  total_wide_balls: number;
  total_no_balls: number;
  total_balls: number;
}

export interface IScoreboardHeaderProps {
  title: string;
}