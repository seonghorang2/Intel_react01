import "./TodoList.css";
import { useState, useCallback, memo, useEffect, useRef } from "react";

const initialTodos = [
  { id: 1, task: "첫번째할일", isDone: false },
  { id: 2, task: "두번째할일", isDone: false },
  { id: 3, task: "세번째할일", isDone: false },
];

/* =======================
   Todo Item
======================= */
const TodoItem = memo(function TodoItem({
  todo,
  onToggle,
  onDelete,
  removing,
}) {
  return (
    <li
      className={`${todo.isDone ? "completed" : ""} ${
        removing ? "removing" : ""
      }`}
    >
      <input
        type="checkbox"
        checked={todo.isDone}
        onChange={() => onToggle(todo.id)}
      />
      <span>{todo.task}</span>

      <button
        onClick={() => onDelete(todo.id)}
        aria-label={`"${todo.task}" 할 일 삭제`}
      >
        ✖️
      </button>
    </li>
  );
});

/* =======================
   Main Component
======================= */
function TodoList() {
  /* 🔥 localStorage 기반 초기화 */
  const [todos, setTodos] = useState(() => {
    try {
      const saved = localStorage.getItem("todos");
      return saved ? JSON.parse(saved) : initialTodos;
    } catch {
      return initialTodos;
    }
  });

  const [todoValue, setTodoValue] = useState("");
  const [filter, setFilter] = useState("all");

  const [removingIds, setRemovingIds] = useState(() => new Set());

  const timeoutMapRef = useRef(new Map());

  useEffect(() => {
    try {
      localStorage.setItem("todos", JSON.stringify(todos));
    } catch {
      // 저장 실패 시 앱 동작은 유지
    }
  }, [todos]);

  /* 언마운트 시 모든 타이머 정리 */
  useEffect(() => {
    return () => {
      timeoutMapRef.current.forEach((timeoutId) => clearTimeout(timeoutId));
      timeoutMapRef.current.clear();
    };
  }, []);

  /* =======================
     Derived State
  ======================= */
  const hasCompleted = todos.some((t) => t.isDone);
  const isEmpty = todos.length === 0;
  const remainingCount = todos.filter((t) => !t.isDone).length;

  /* =======================
     Add Todo
  ======================= */
  const addTodo = useCallback(() => {
    const trimmed = todoValue.trim();
    if (!trimmed) return;

    setTodos((prev) => [
      ...prev,
      { id: Date.now(), task: trimmed, isDone: false },
    ]);

    setTodoValue("");
  }, [todoValue]);

  /* =======================
     Toggle Todo
  ======================= */
  const toggleTodo = useCallback((id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
      ),
    );
  }, []);

  /* =======================
     Delete One
  ======================= */
  const deleteTodo = useCallback((id) => {
    if (timeoutMapRef.current.has(id)) return;

    setRemovingIds((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });

    const timeoutId = setTimeout(() => {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
      setRemovingIds((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
      timeoutMapRef.current.delete(id);
    }, 250);

    timeoutMapRef.current.set(id, timeoutId);
  }, []);

  /* =======================
     Delete All
  ======================= */
  const clearTodos = useCallback(() => {
    if (!window.confirm("전체 삭제할까요? 되돌릴 수 없습니다.")) return;
    setTodos([]);
    setRemovingIds(new Set());
  }, []);

  /* =======================
     Delete Completed
  ======================= */
  const deleteCompleted = useCallback(() => {
    if (!hasCompleted) return;
    if (!window.confirm("완료된 항목을 삭제할까요? 되돌릴 수 없습니다."))
      return;

    setTodos((prev) => prev.filter((todo) => !todo.isDone));
    setRemovingIds(new Set());
  }, [hasCompleted]);

  /* =======================
     Filter Logic
  ======================= */
  const filteredTodos = todos.filter((todo) => {
    switch (filter) {
      case "active":
        return !todo.isDone;
      case "completed":
        return todo.isDone;
      default:
        return true;
    }
  });

  /* =======================
     Render
  ======================= */
  return (
    <div className="container">
      <h1>📝투두리스트📝</h1>

      <p className="list_count">
        {remainingCount === 0
          ? "📭 할 일이 없어요. 새 할 일을 추가해보세요!"
          : `남은 할 일: ${remainingCount}개`}
      </p>

      <div className="input-box">
        <div className="row">
          <input
            type="text"
            placeholder="할 일을 입력하세요"
            value={todoValue}
            onChange={(e) => setTodoValue(e.target.value)}
            onKeyUp={(e) => e.key === "Enter" && addTodo()}
          />
          <button onClick={addTodo}>추가</button>
        </div>
      </div>

      <div className="list-header">
        <div className="filter">
          <span>필터:</span>

          <button
            className={filter === "all" ? "active" : ""}
            onClick={() => setFilter("all")}
          >
            전체
          </button>

          <button
            className={filter === "active" ? "active" : ""}
            onClick={() => setFilter("active")}
          >
            미완료
          </button>

          <button
            className={filter === "completed" ? "active" : ""}
            onClick={() => setFilter("completed")}
          >
            완료
          </button>
        </div>
      </div>

      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            removing={removingIds.has(todo.id)}
          />
        ))}
      </ul>

      <div className="bottom-actions">
        <button className="danger" onClick={clearTodos} disabled={isEmpty}>
          전체 항목 삭제
        </button>

        <button
          className="danger"
          onClick={deleteCompleted}
          disabled={!hasCompleted}
        >
          완료 항목 삭제
        </button>
      </div>
    </div>
  );
}

export default TodoList;
