import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";

const Home = lazy(() => import("./components/Home"));
const Counter = lazy(() => import("./components/Counter"));
const TodoList = lazy(() => import("./components/TodoList"));
const NotFound = lazy(() => import("./components/NotFound"));

function App() {
  return (
    <div>
      <Navigation />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
