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
  const handleClick = () => {
    console.log()
  };

  return (
    <div>
      <div>
        {optionButtons.map((optionButton) => {
          return <button value={optionButton.Status} onClick={handleClick}>{optionButton.Status}</button>;
        })}
      </div>
    </div>
  );
};

export default Options;
