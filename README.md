# Please follow the steps below to set up the project on your local machine:

#### 1. Clone the repo by running the command in your terminal
#### git clone https://github.com/geekyasif/cricket_commentry 
#### 2. Change your working directory to '/cricket_commentry'.
#### 3. Install the necessary dependencies by running 'npm install'.
#### 4. Finally, start the server by running 'npm run dev'.

## Features:

#### - Saving data into the database

#### - New ball events are generated after calculating the result

#### - Scoreboard includes:

  #### - Team scoreboard: total runs, balls, wide balls, no balls, and wickets
  
  #### - Player scoreboard: runs and review

#### - Striker and non-striker input fields are reflected in real-time on all tabs, along with the player scoreboard

#### - On runs 1 and 3, players switch in real-time, and their scores are updated on all tabs via sockets

#### - On wicket, the striker field will be empty in all tabs, and the player status will change from on-striker to played

#### - On run wicket, the non-striker field will be empty, similar to wicket for the striker

#### - Real-time update for all single events like 0, 1, 2, 3, 4, 6, wicket, no ball, and wide ball

#### - Working combinations include:
#### - 1 -> 2 -> 3, which will count only the last three runs and update the striker and non-striker positions in real-time on all tabs.
  
####  - run_wicket, run_no_ball, no_ball_wide_ball, wide_ball_no_ball, no_ball_wicket, wicket_no_ball, wide_ball_run.
  
#### - Events synced. For example, 
  	if there is a click on the 3 button from one tab, but there is also a click on the wicket from another tab, it will take 2 runs + 1 wicket + 1 ball.
  	
#### - Showing Errors with toast messages


#### Some bugs and future implementations are needed in the system. 
#### We need to add ball counts in player information into the database. 
#### We created database and socket events on each button event, but some problems are occurring.

#### Note that the project will not work until it is connected to the backend. You can find the backend repo by following the link https://github.com/geekyasif/cricket_commentry_backend. If you encounter any CORS errors, you can install the CORS plugin and enable it.

#### To see a demo of the project, please follow this link: https://drive.google.com/file/d/1ngQjnxB08dZJW9NRJq7_Gwuv20_tTvAv/view?usp=sharing.

### Images

![Screenshot from 2023-12-24 20-32-44](https://github.com/geekyasif/cricket_commentry/assets/38504330/93b5cdb3-13e9-478e-8a3b-0f36d8a7a0ef)
![Screenshot from 2023-12-24 20-32-03](https://github.com/geekyasif/cricket_commentry/assets/38504330/838c8929-61cc-4211-8460-1ca670813081)
![Screenshot from 2023-12-24 20-31-33](https://github.com/geekyasif/cricket_commentry/assets/38504330/0c7041fb-5d2c-4fab-b7fe-171e7ff07778)
![Screenshot from 2023-12-23 15-15-34](https://github.com/geekyasif/cricket_commentry/assets/38504330/0920189b-c431-442c-a418-f8f085ed8b0d)
