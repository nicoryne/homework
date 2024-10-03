import React from "react";

//============IMPORTING IMAGES======================

// Retrieves all image files in specified directory.
const images = require.context(
  "../../public/img/moves",
  false,
  /\.(png|jpe?g|svg)$/
);

// Instantiate map to hold all image files
const imageMap = {};

// Maps out each image to map with their filenames as keys
images.keys().forEach((image) => {
  const imageName = image.replace("./", "");
  imageMap[imageName] = images(image);
});

//==================================================

//============LISTING IMAGES========================

// List all sprite images for easier iteration
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

const horizontalBulletImage = imageMap["bullet_h.png"];
const verticalBulletImage = imageMap["bullet_v.png"];

//==================================================

//=========SETTING POSITIONS AND CONSTRAINTS=========

const positionConstraints = {
  maxX: 1250,
  minX: 550,
  maxY: 200,
  minY: 100,
};

const resetPosition = { x: 800, y: 300 };

//==================================================

function Bullet({ bullet }) {
  const { position, direction } = bullet;

  return (
    <img
      src={
        direction === "horizontal" ? horizontalBulletImage : verticalBulletImage
      }
      style={{
        position: "absolute",
        top: `${position.y}px`,
        left: `${position.x}px`,
        width: "20px",
        height: "20px",
      }}
      alt="bullet"
    />
  );
}

export default function Patuti() {
  // USE STATES
  // bruh there's so many use states, i'm doing this wrong lol
  const [patutiState, setPatutiState] = React.useState(imageMap["idle-1.png"]);
  const [patutiList, setPatutiList] = React.useState(idleList);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [positionOffset, setPositionOffset] = React.useState(resetPosition);
  const [isFalling, setIsFalling] = React.useState(false);
  const [isJumping, setIsJumping] = React.useState(false);
  const [isDucking, setIsDucking] = React.useState(false);
  const [bullets, setBullets] = React.useState([]);
  const [hp, setHp] = React.useState(100);
  const [isGameOver, setIsGameOver] = React.useState(false);

  const maxHp = 100;

  // FUNCTIONS
  /**
   * Calculate HP Bar
   */
  const calculateHpWidth = () => {
    return `${(hp / maxHp) * 100}%`;
  };

  /**
   * Falling Function
   */
  const triggerFall = React.useCallback(() => {
    setIsFalling(true);

    const fallInterval = setInterval(() => {
      setPositionOffset((prev) => {
        const newY = prev.y + 10;
        if (newY >= window.innerHeight - 10) {
          clearInterval(fallInterval);
          setPositionOffset(resetPosition);
          setIsFalling(false);
        }
        return { ...prev, y: newY };
      });
    }, 50);
  }, []);

  /**
   * Move Right Function
   */
  const moveRight = React.useCallback(() => {
    setPatutiList(rightList);
    setPositionOffset((prev) => {
      let newX = Math.min(positionConstraints.maxX, prev.x + 10);
      if (newX === positionConstraints.maxX) {
        triggerFall();
      }
      if (newX > window.innerWidth) {
        newX = resetPosition.x;
      }
      return { ...prev, x: newX };
    });
  }, [triggerFall]);

  /**
   * Move Left Function
   */
  const moveLeft = React.useCallback(() => {
    setPatutiList(leftList);
    setPositionOffset((prev) => {
      let newX = Math.max(positionConstraints.minX, prev.x - 10);
      if (newX === positionConstraints.minX) {
        triggerFall();
      }
      if (newX < 0) {
        newX = resetPosition.x;
      }
      return { ...prev, x: newX };
    });
  }, [triggerFall]);

  /**
   * Jumping Function
   */
  const triggerJump = React.useCallback(() => {
    if (isJumping || isFalling) return;
    setIsJumping(true);
    setPatutiList(jumpList);
    const jumpHeight = 100;
    const jumpDuration = 2000;

    const upInterval = setInterval(() => {
      setPositionOffset((prev) => {
        const newY = prev.y - 10;
        if (prev.y <= resetPosition.y - jumpHeight) {
          clearInterval(upInterval);

          const downInterval = setInterval(() => {
            setPositionOffset((downPrev) => {
              const fallY = downPrev.y + 10;
              if (fallY >= resetPosition.y) {
                clearInterval(downInterval);
                setIsJumping(false);
                return { ...downPrev, y: resetPosition.y };
              }
              return { ...downPrev, y: fallY };
            });
          }, jumpDuration / jumpHeight);
        }
        return { ...prev, y: newY };
      });
    }, jumpDuration / jumpHeight);
  }, [isJumping, isFalling]);

  /**
   * Ducking Function
   */
  const triggerDuck = React.useCallback(() => {
    if (isDucking || isJumping || isFalling) return;

    setIsDucking(true);
    setPatutiList(dockList);
    setCurrentIndex(0);

    const duckHeight = 20;
    const duckDuration = 500;
    const stayDuration = 500;

    const downInterval = setInterval(() => {
      setPositionOffset((prev) => {
        const newY = Math.min(prev.y + 10, resetPosition.y + duckHeight);
        if (newY >= resetPosition.y + duckHeight) {
          clearInterval(downInterval);

          setTimeout(() => {
            const upInterval = setInterval(() => {
              setPositionOffset((upPrev) => {
                const upY = Math.max(upPrev.y - 10, resetPosition.y);
                if (upY <= resetPosition.y) {
                  clearInterval(upInterval);
                  setPatutiList(idleList);
                  setCurrentIndex(0);
                  setIsDucking(false);
                }
                return { ...upPrev, y: upY };
              });
            }, duckDuration / duckHeight);
          }, stayDuration);
        }
        return { ...prev, y: newY };
      });
    }, duckDuration / duckHeight);
  }, [isDucking, isJumping, isFalling]);

  const spawnBullet = () => {
    const bulletType = Math.random() < 0.5 ? "horizontal" : "vertical";
    let newBullet;

    if (bulletType === "horizontal") {
      newBullet = {
        id: Date.now(),
        position: {
          x: window.innerWidth,
          y: Math.random() * (300 - 50) + 100,
        },
        direction: "horizontal",
      };
    } else {
      newBullet = {
        id: Date.now(),
        position: {
          x: Math.random() * window.innerWidth,
          y: 0,
        },
        direction: "vertical",
      };
    }

    setBullets((prevBullets) => [...prevBullets, newBullet]);
  };

  /**
   * Key Press Function
   */
  const handleKeyDown = React.useCallback(
    (e) => {
      if (isFalling || isJumping) return;

      switch (e.key.toLowerCase()) {
        case "d":
          moveRight();
          break;
        case "a":
          moveLeft();
          break;
        case "w":
          triggerJump();
          break;
        case "s":
          triggerDuck();
          break;
        default:
          setPatutiList(idleList);
          break;
      }
    },
    [isFalling, isJumping, moveRight, moveLeft, triggerJump, triggerDuck]
  );

  // USE EFFECTS
  /**
   * Patuti List Handler and Iterator
   */
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (isDucking) {
          return patutiList.length - 1;
        }

        const newIndex = (prevIndex + 1) % patutiList.length;

        if (patutiList !== idleList && newIndex === 0) {
          setPatutiList(idleList);
        }

        return newIndex;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [patutiList, isDucking]);

  /**
   * Patuti State Handler
   */
  React.useEffect(() => {
    setPatutiState(imageMap[patutiList[currentIndex]]);
  }, [currentIndex, patutiList]);

  /**
   * Key Press Handler
   */
  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  // hatdog
  React.useEffect(() => {
    const bulletInterval = setInterval(() => {
      setBullets((prevBullets) =>
        prevBullets
          .map((bullet) => {
            const newPosition = { ...bullet.position };
            if (bullet.direction === "horizontal") {
              newPosition.x -= 5;
            } else {
              newPosition.y += 5;
            }
            return { ...bullet, position: newPosition };
          })
          .filter((bullet) => {
            if (bullet.direction === "horizontal") {
              return bullet.position.x > 0;
            } else {
              return bullet.position.y < window.innerHeight;
            }
          })
      );
    }, 50);

    return () => clearInterval(bulletInterval);
  }, []);

  // idk unsa na ni lasdasdasd
  React.useEffect(() => {
    const checkCollisions = () => {
      bullets.forEach((bullet) => {
        if (
          bullet.position.x < positionOffset.x + 50 &&
          bullet.position.x + 20 > positionOffset.x &&
          bullet.position.y < positionOffset.y + 50 &&
          bullet.position.y + 20 > positionOffset.y
        ) {
          setHp((prevHp) => Math.max(prevHp - 20, 0));
          setBullets((prevBullets) =>
            prevBullets.filter((b) => b.id !== bullet.id)
          );
        }
      });
    };

    const collisionInterval = setInterval(checkCollisions, 50);
    return () => clearInterval(collisionInterval);
  }, [bullets, positionOffset]);

  React.useEffect(() => {
    const spawnInterval = setInterval(spawnBullet, 2000);
    return () => clearInterval(spawnInterval);
  }, []);

  React.useEffect(() => {
    if (hp <= 0) {
      setIsGameOver(true);
    }
  }, [hp]);
  // RENDERING
  return (
    <main
      style={{
        backgroundImage: `url(${imageMap["background.png"]})`,
        width: "100vw",
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isGameOver ? ( // Conditional rendering for game over screen
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            color: "white",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <h1>Game Over</h1>
          <p>Your HP reached 0!</p>
          <button onClick={() => window.location.reload()}>Restart</button>
        </div>
      ) : (
        <div
          style={{
            backgroundImage: `url(${imageMap["area.png"]})`,
            width: "40em",
            height: "400px",
            backgroundSize: "contain",
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div>
            {bullets.map((bullet) => (
              <Bullet key={bullet.id} bullet={bullet} />
            ))}
          </div>
          <img
            src={patutiState}
            style={{
              position: "absolute",
              top: `${positionOffset.y}px`,
              left: `${positionOffset.x}px`,
              width: "5em",
              height: "5em",
            }}
            alt="patuti.png"
            id="patuti-holder"
          />
        </div>
      )}

      {/* HP Bar */}
      <div
        style={{
          backgroundColor: "red",
          width: "200px",
          height: "20px",
          top: 940,
          left: 1300,
          borderRadius: "5px",
          overflow: "hidden",
          position: "absolute",
        }}
      >
        <div
          style={{
            backgroundColor: "green",
            width: calculateHpWidth(),
            height: "100%",
          }}
        />
      </div>
    </main>
  );
}
