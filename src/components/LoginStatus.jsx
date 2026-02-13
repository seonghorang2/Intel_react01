import React from "react";

function LoginStatus({ isLoggedIn, username }) {
  if (isLoggedIn) {
    return (
      <div>
        <p>{username}님, 안녕하세요! 👋</p>
        <button>로그아웃</button>
      </div>
    );
  }

  return (
    <div>
      <p>로그인이 필요합니다.</p>
      <button>로그인</button>
    </div>
  );
}

export default LoginStatus;
