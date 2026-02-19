// 스켈레톤 컴포넌트
function SkeletonItem() {
  return (
    <div
      style={{
        padding: "15px",
        marginBottom: "10px",
        border: "1px solid #ddd",
        borderRadius: "8px",
      }}
    >
      <div
        style={{
          width: "150px",
          height: "20px",
          backgroundColor: "#e0e0e0",
          borderRadius: "4px",
          marginBottom: "8px",
          animation: "pulse 1.5s infinite",
        }}
      ></div>

      <div
        style={{
          width: "200px",
          height: "14px",
          backgroundColor: "#e0e0e0",
          borderRadius: "4px",
          animation: "pulse 1.5s infinite",
        }}
      ></div>
    </div>
  );
}

export default SkeletonItem;
