import { EachBox } from "../styles/contests.styed";
// import GoingButton from "./goingButton";
// import MaybeButton from "./maybeButton";
// import NotGoingButton from "./notGoingButton";
import Options from "./options";

const ContestComp = ({ name, url, start_time, end_time, site, status }) => {
  return (
    <EachBox>
      <h3>{name}</h3>
      <a href={url} rel="noreferrer noopener" target="_blank">
        {url}
      </a>
      <ul>
        <li>Start Time: {start_time}</li>
        <li>End Time: {end_time}</li>
        <li>Location: {site}</li>
        <li>Status: {status}</li>
      </ul>
      {/* <button>Going</button>
      <button>Interested</button>
      <button>Not Going</button> */}
      {/* <GoingButton />
      <MaybeButton />
      <NotGoingButton /> */}
      <Options />
    </EachBox>
  );
};

export default ContestComp;
