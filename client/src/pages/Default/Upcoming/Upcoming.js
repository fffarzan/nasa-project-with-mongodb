import { useMemo } from "react";
import { Link } from "react-router-dom";

import Clickable from "../../../components/Clickable";

import './Upcoming.css';

export default props => {
  const { launches, abortLaunch } = props;

  const tableBody = useMemo(() => launches?.filter(launch => launch.upcoming).map(launch => (
    <tr key={String(launch.flightNumber)}>
      <td>
        <Clickable style={{color:"red"}}>
          <Link onClick={() => abortLaunch(launch.flightNumber)}> ✖ </Link>
        </Clickable>
      </td>
      <td>{launch.flightNumber}</td>
      <td>{new Date(launch.launchDate).toDateString()}</td>
      <td>{launch.mission}</td>
      <td>{launch.rocket}</td>
      <td>{launch.target}</td>
    </tr>
  )), [launches, abortLaunch]);

  const tableHeader = (
    <thead>
      <tr>
        <th>Action</th>
        <th>No.</th>
        <th>Date</th>
        <th>Mission</th>
        <th>Rocket</th>
        <th>Destination</th>
      </tr>
    </thead>
  );

  return (
    <section id="upcoming">
      <p>Upcoming missions including both SpaceX launches and newly scheduled Zero to Mastery rockets.</p>
      <span>Warning! Clicking on the ✖ aborts the mission.</span>
      <table className="history-table">
          {tableHeader}
        <tbody>
          {tableBody}
        </tbody>
      </table>
    </section>
  );
}