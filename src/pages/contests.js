import { useEffect, useState } from "react";
import Navbar from "../components/navbar";

const Contests = ({ setter, user }) => {
  // useState
  const [contests, setContest] = useState([]);
  // error handling useState
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://kontests.net/api/v1/all");
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setContest(data);
        console.log(data);
      } catch (error) {
        console.log(error);
        setError("Could not fetch the data");
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <Navbar user={user} setter={setter} />
      <h1>Welcome {user}</h1>
      <div>
        {error && <p>{error}</p>}
        <div>
          {contests.map((contest) => (
            <div key={contest.id}>
              <h3>{contest.name}</h3>
              {contest.url}
              <ul>
                <li>{contest.start_time}</li>
                <li>{contest.end_time}</li>
                <li>{contest.site}</li>
                <li>{contest.status}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contests;
