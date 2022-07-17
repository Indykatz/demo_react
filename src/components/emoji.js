import { useEffect, useState } from "react";

const Emoji = () => {
  const [emoji, setEmoji] = useState();
  //   const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmoji = async () => {
      try {
        const emojiRes = await fetch(
          "https://emojihub.herokuapp.com/api/random"
        );
      } catch (error) {
        console.log(error);
      }
    };
  });

  return (
    <div>
      <div></div>
    </div>
  );
};

export default Emoji;
