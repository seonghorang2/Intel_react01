import React from "react";

function OrderStatus({ status }) {
  return (
    <div>
      <h2>주문 현황</h2>
      {status === "pending" && <p>⏱️ 주문 접수 중...</p>}
      {status === "preparing" && <p>👨‍🍳 음식 준비 중...</p>}
      {status === "delivering" && <p>🚗 배달 중...</p>}
      {status === "completed" && <p>✅ 배달 완료!</p>}
    </div>
  );
}

export default OrderStatus;
