function Weather({ temperature }) {
  const message =
    temperature >= 30
      ? "🥵 매우 더워요"
      : temperature >= 20
        ? "😊 적당해요"
        : temperature >= 10
          ? "🧥 쌀쌀해요"
          : "🥶 매우 추워요";

  return (
    <div>
      <h2>현재 온도: {temperature}°C</h2>
      <p>{message}</p>
    </div>
  );
}

export default Weather;
