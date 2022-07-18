import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { fetechContest } from "../utlis";
import ContestComp from "../components/contest";
import { FlexBox } from "../styles/contests.styed";

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
          {contests.map((contest, i) => {
            return (
              <ContestComp
                key={i}
                name={contest.name}
                url={contest.url}
                start_time={contest.start_time}
                end_time={contest.end_time}
                site={contest.site}
                status={contest.status}
              />
            );
          })}
          ,
        </FlexBox>
      </div>
    </div>
  );
};

export default Contests;
