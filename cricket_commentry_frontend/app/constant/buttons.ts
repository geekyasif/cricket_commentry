export default [
    {
        type: 0,
        payload: {
            increment_ball: 1,
            increment_runs: 0,
        },
        onstrike: ""
    },
    {
        type: 1,
        payload: {
            increment_ball: 1,
            increment_runs: 1,
        },
        onstrike: ""

    },
    {
        type: 2,
        payload: {
            increment_ball: 1,
            increment_runs: 2,
        },
        onstrike: ""
    },
    {
        type: 3,
        payload: {
            increment_ball: 1,
            increment_runs: 3,
        },
        onstrike: ""
    },
    {
        type: 4,
        payload: {
            increment_ball: 1,
            increment_runs: 4,
        },
        onstrike: ""
    },
    {
        type: 6,
        payload: {
            increment_ball: 1,
            increment_runs: 6,
        },
        onstrike: ""
    },
    {
        type: "wicket",
        payload: {
            increment_ball: 1,
            increment_wicket: 1,
        },
        onstrike: ""
    },
    {
        type: "no_ball",
        payload: {
            increment_ball: 0,
            increment_runs: 1,
        },
        onstrike: ""
    },
    {
        type: "wide",
        payload: {
            increment_ball: 0,
            increment_runs: 1,
        },
        onstrike: ""
    },
];