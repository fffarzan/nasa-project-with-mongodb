import { Switch, Route } from "react-router-dom";

import usePlanets from "../../hooks/usePlanets";
import useLaunches from "../../hooks/useLaunches";

import Centered from "../../components/Centered";
import Header from "../../components/Header/Header";

import Launch from "./Launch/Launch";
import History from "./History/History";
import Upcoming from "./Upcoming/Upcoming";

import './Default.css';

export default () => {
  const { launches, isPendingLaunch, submitLaunch, abortLaunch } = useLaunches();
  const planets = usePlanets();
  
  return (
    <div>
      <Header />
      
      <Centered className="page">
        <Switch>
          <Route exact path="/">
            <Launch 
              planets={planets}
              submitLaunch={submitLaunch}
              isPendingLaunch={isPendingLaunch} 
            />
          </Route>

          <Route exact path="/launch">
            <Launch
              planets={planets}
              submitLaunch={submitLaunch}
              isPendingLaunch={isPendingLaunch} 
            />
          </Route>

          <Route exact path="/upcoming">
            <Upcoming
              launches={launches}
              abortLaunch={abortLaunch} 
            />
          </Route>

          <Route exact path="/history">
            <History 
              launches={launches} 
            />
          </Route>
        </Switch>
      </Centered>
    </div>
  );
};