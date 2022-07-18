import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { fetechContest } from "../utlis";
import { FlexBox, EachBox } from "../styles/contests.styed";

const Contests = ({ setter, user }) => {
  // useState
  const [contests, setContest] = useState([]);

  useEffect(() => {
    fetechContest(setContest);
  }, []);

  return (
    <div>
      <Navbar user={user} setter={setter} />
      <h1>Welcome {user}</h1>
      <div>
        <FlexBox>
          {contests.map((contest) => (
            <EachBox key={contest.id}>
              <h3>{contest.name}</h3>
              {contest.url}
              <ul>
                <li>{contest.start_time}</li>
                <li>{contest.end_time}</li>
                <li>{contest.site}</li>
                <li>{contest.status}</li>
              </ul>
            </EachBox>
          ))}
        </FlexBox>
      </div>
    </div>
  );
};

export default Contests;
