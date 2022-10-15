import { useMemo } from "react";

import './History.css';

export default props => {
  const tableBody = useMemo(() => props.launches?.filter(launch => !launch.upcoming).map(launch => (
    <tr key={String(launch.flightNumber)}>
      <td>
        <span style={
          {color: launch.success ? "greenyellow" : "red"}
        }>█</span>
      </td>
      <td>{launch.flightNumber}</td>
      <td>{new Date(launch.launchDate).toDateString()}</td>
      <td>{launch.mission}</td>
      <td>{launch.rocket}</td>
      <td>{launch.customers?.join(", ")}</td>
    </tr>
  )), [props.launches]);

  const tableHeader = ( 
    <tr>
      <th>Status</th>
      <th>No.</th>
      <th>Date</th>
      <th>Mission</th>
      <th>Rocket</th>
      <th>Customers</th>
    </tr>
  );

  return (
    <article id="history">
      <p>History of mission launches including SpaceX launches starting from the year 2006.</p>
      <table className="history-table">
        <thead>
          {tableHeader}
        </thead>
        <tbody>
          {tableBody}
        </tbody>
      </table>
    </article>
  );
}
