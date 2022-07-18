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
  return (
    <div>
      <div>
        {optionButtons.map((optionButton) => {
          return <button>{optionButton.Status}</button>;
        })}
      </div>
    </div>
  );
};

export default Options;
