import React from "react";
const images = require.context(
  "../../public/img/moves",
  false,
  /\.(png|jpe?g|svg)$/
);
const imageMap = {};

images.keys().forEach((image) => {
  const imageName = image.replace("./", "");
  imageMap[imageName] = images(image);
});

const idleList = ["idle-1.png", "idle-2.png"];

const dockList = [
  "dock-1.png",
  "dock-2.png",
  "dock-3.png",
  "dock-4.png",
  "dock-5.png",
];

const jumpList = [
  "jump-1.png",
  "jump-2.png",
  "jump-3.png",
  "jump-4.png",
  "jump-5.png",
  "jump-6.png",
  "jump-7.png",
];

const leftList = [
  "left-1.png",
  "left-2.png",
  "left-3.png",
  "left-4.png",
  "left-5.png",
];

const rightList = [
  "right-1.png",
  "right-2.png",
  "right-3.png",
  "right-4.png",
  "right-5.png",
];

export default function Patuti() {
  const [patutiState, setPatutiState] = React.useState(imageMap["idle-1.png"]);
  const [patutiList, setPatutiList] = React.useState(idleList);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [positionOffset, setPositionOffset] = React.useState({
    top: 200,
    left: 550,
  });
  const [keyPressed, setKeyPressed] = React.useState(false);


  const currentIndexRef = React.useState(currentIndex);
  currentIndexRef.current = currentIndex;
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % patutiList.length;
        if (patutiList !== idleList && newIndex === 0) {
          setPatutiList(idleList);
        }
        return newIndex;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [patutiList]);

  React.useEffect(() => {
    setPatutiState(imageMap[patutiList[currentIndex]]);
  }, [currentIndex, patutiList]);

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyDown, true);
  }, []);

  const handleKeyDown = (e) => {
    console.log(e.key);

    switch (e.key) {
      case "d" || "D":
        setPatutiList(rightList);
        setPositionOffset((prev) => ({ ...prev, left: prev.left + 10 }));
        break;
      case "a" || "A":
        setPatutiList(leftList);
        setPositionOffset((prev) => ({ ...prev, left: prev. left - 10 }));
        break;
      case "w" || "W":
        setPatutiList(jumpList);

        setPositionOffset((prev) => ({ ...prev, top: prev.top - 50 }));
        setTimeout(() => {
          setPositionOffset((prev) => ({ ...prev, top: prev.top + 50 }));
        }, 300);
        break;
      case "s" || "S":
        setPatutiList(dockList);
        setPositionOffset((prev) => ({ ...prev, top: prev.top + 10 }));
        setTimeout(() => {
          setPositionOffset((prev) => ({ ...prev, top: prev.top - 10 }));
        }, 300);
        break;
      default:
        setPatutiList(idleList);
        break;
    }
  };

  return (
    <main
      style={{
        backgroundImage: `url(${imageMap["background.png"]})`,
        width: "100vw",
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        <img
          src={patutiState}
          style={{
            position: "absolute",
            top: `${positionOffset.top}px`,
            left: `${positionOffset.left}px`,
          }}
          alt="patuti.png"
          id="patuti-holder"
        ></img>
      </div>
    </main>
  );
}
