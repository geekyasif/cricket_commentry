export enum Review {
  Unplayed,
  Played,
  Out,
  Stiker,
  NonStiker,
}

export interface TeamScoreboard {
  total_runs: number;
  total_wickets: number;
  total_wide_balls: number;
  total_no_balls: number;
  total_balls: number;
}

export interface Player {
  runs: number;
  review: Review;
}

export interface Players {
  [key: string]: Player;
}

export interface Data {
  team_scoreboard: TeamScoreboard;
  players: Players;
}

export interface Payload {
  increment_ball?: number;
  increment_runs?: number;
  increment_wicket?: Number;
  increment_no_ball?: Number;
  increment_wide_ball?: Number;
}

export interface Action {
  type: number | string;
  payload: Payload;
}
