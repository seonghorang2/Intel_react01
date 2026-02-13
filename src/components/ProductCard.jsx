function ProductCard({ product }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "12px",
        marginBottom: "12px",
      }}
    >
      <h3>{product.name}</h3>

      {/* 1️⃣ 재고 여부 */}
      <p>{product.stock === 0 ? "❌ 품절" : `재고: ${product.stock}개`}</p>

      {/* 2️⃣ 품절 임박 */}
      {product.stock > 0 && product.stock <= 5 && (
        <p style={{ color: "orange" }}>⚠️ 품절임박</p>
      )}

      {/* 3️⃣ 할인중 배지 */}
      {product.onSale && (
        <span style={{ color: "red", fontWeight: "bold" }}>🔥 할인중!</span>
      )}
    </div>
  );
}

export default ProductCard;
