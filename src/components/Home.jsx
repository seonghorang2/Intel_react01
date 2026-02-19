import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home-card">
        <h1>Welcome 👋</h1>
        <p>리액트 라우터 실습 프로젝트입니다.</p>

        <div className="home-buttons">
          <a href="/counter" className="home-btn">
            Counter 가기
          </a>
          <a href="/todolist" className="home-btn secondary">
            TodoList 가기
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
