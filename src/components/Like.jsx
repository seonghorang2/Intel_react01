import { useState } from "react";

function Like() {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked((prev) => !prev);
  };

  return <button onClick={toggleLike}>{isLiked ? "❤️" : "🤍"}</button>;
}

export default Like;
