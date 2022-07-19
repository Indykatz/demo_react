// list of object [{Event, Status}, {Event, Status}]

import { useState } from "react";

const Options = () => {
  const optionButtons = [
    { Status: "Going" },
    { Status: "Maybe" },
    { Status: "Not Going" },
  ];
  //   DRY
  //  Mark optionButton.Status aka going would be marked with clicked
  //   handle click
  //   if optionButton.Status == "Going"
  // else if optionButton.Status == "Maybe"
  // else if optionButton.Status == "Not Going"

  const [status, setStatus] = useState([]);

  return (
    <div>
      <div>
        {optionButtons.map((optionButton) => {
          return (
            <button
              value={optionButton}
              onClick={() => setStatus([...status, optionButton.Status])}
            >
              {optionButton.Status}
            </button>
          );
        })}
      </div>
      {status}
      <div>
      </div>
    </div>
  );
};

export default Options;
