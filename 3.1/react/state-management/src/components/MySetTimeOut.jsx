import { useEffect, useState } from "react";

export default function MySetTimeOut({ duration, setDuration, cardWidth }) {
  const [width, setWidth] = useState(0);
  const tempDuration = 20 * 41.67;
  const moveInterval = 30;

  useEffect(() => {
    if (duration <= 0) {
      return;
    }

    const intervalId = setInterval(() => {
      setWidth((prevWidth) => (prevWidth + moveInterval) % cardWidth);

      if (duration > 0) {
        setDuration((prevDuration) => prevDuration - 1);
      }
    }, tempDuration);

    return () => clearInterval(intervalId);
  }, [duration, cardWidth, setDuration, tempDuration]);

  const barWidth = duration > 0 ? cardWidth - width : cardWidth;

  return (
    <div
      style={{
        width: barWidth,
        backgroundColor: "#CC4E56",
        transition: `width ${
          tempDuration / 1000
        }s cubic-bezier(0.42, 0, 0.58, 1)`,
        border: "1px solid #000",
        borderRadius: 5,
      }}
    >
      &nbsp;
    </div>
  );
}
