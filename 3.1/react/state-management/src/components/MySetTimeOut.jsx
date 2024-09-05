import { useEffect, useState } from "react";

export default function MySetTimeOut({ duration, setDuration }) {
  const [width, setWidth] = useState(0);
  const tempDuration = 20 * 41.67;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setWidth((prevWidth) => (prevWidth + 30) % 500);

      if (duration > 0) {
        setDuration(duration - 1);
      }
    }, tempDuration);

    return () => clearInterval(intervalId);
  }, [duration]);

  return (
    <div
      style={{
        width: 500 - width,
        backgroundColor: "#CC4E56",
        transition: `width ${
          tempDuration / 1000
        }s cubic-bezier(0.42, 0, 0.58, 1)`,
      }}
    >
      &nbsp;
    </div>
  );
}
