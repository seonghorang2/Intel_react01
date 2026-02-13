import React from "react";

function NewMail({ newMailCount }) {
  return (
    <>
      <h3>메일함{newMailCount > 0 && "🆕"}</h3>
      {newMailCount > 0 && (
        <div>새로운 메시지가 {newMailCount}개 있습니다.</div>
      )}
    </>
  );
}

export default NewMail;
