import { useCallback, useEffect, useState } from "react";

import { httpGetLaunches, httpSubmitLaunch, httpAbortLaunch } from './requests';

export default () => {
  const [launches, setLaunches] = useState([]);
  const [isPendingLaunch, setPendingLaunch] = useState(false);

  const getLaunches = useCallback(async () => {
    const fetchedLaunches = await httpGetLaunches();
    setLaunches(fetchedLaunches);
  }, []);

  useEffect(() => {
    getLaunches();
  }, [getLaunches]);

  const submitLaunch = useCallback(async (e) => {
    e.preventDefault();
    setPendingLaunch(true);
    const data = new FormData(e.target);
    const launchDate = new Date(data.get("launch-day"));
    const mission = data.get("mission-name");
    const rocket = data.get("rocket-name");
    const target = data.get("planets-selector");
    const payload = { flightNumber: 105, launchDate, mission, rocket, target }
    const response = await httpSubmitLaunch(payload);
    const isSuccess = response.ok;
    if (isSuccess) {
      getLaunches();
      setTimeout(() => {
        setPendingLaunch(false);
      }, 800);
    }
  }, [getLaunches]);

  const abortLaunch = useCallback(async (id) => {
    const response = await httpAbortLaunch(id);
    const isSuccess = response.ok;
    if (isSuccess) {
      getLaunches();
    }
  }, [getLaunches]);

  return {
    launches,
    isPendingLaunch,
    submitLaunch,
    abortLaunch,
  };
}