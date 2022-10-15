import { useCallback, useEffect, useState } from "react";

import { httpGetPlanets } from "./requests";

export default () => {
  const [planets, setPlanets] = useState([]);

  const getPlanets = useCallback(async () => {
    const fetchedPlanets = await httpGetPlanets();
    setPlanets(fetchedPlanets);
  }, []);

  useEffect(() => {
    getPlanets();
  }, [getPlanets]);

  return planets;
}
