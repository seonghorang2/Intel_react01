import React from "react";

function SubscribeButton({ isSubscribed }) {
  return <button>{isSubscribed ? "구독중 ✓" : "구독하기"}</button>;
}

export default SubscribeButton;
