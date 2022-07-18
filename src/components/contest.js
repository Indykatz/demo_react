const ContestComp = ({ name, url, start_time, end_time, site, status }) => {
  return (
    <div>
      <h3>{name}</h3>
      {url}
      <ul>
        <li>{start_time}</li>
        <li>{end_time}</li>
        <li>{site}</li>
        <li>{status}</li>
      </ul>
    </div>
  );
};

export default ContestComp;
