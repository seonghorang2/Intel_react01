import React from "react";

function Discount({ price, discount }) {
  return (
    <div>
      {discount ? (
        <>
          <span style={{ textDecoration: "line-through" }}>{price}원</span>{" "}
          <span>({discount}원)</span>
        </>
      ) : (
        <span>{price}원</span>
      )}
    </div>
  );
}

export default Discount;
