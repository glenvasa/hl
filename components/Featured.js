import { useState } from "react";
import styles from "../styles/Featured.module.css";
import Image from "next/image";

const Featured = () => {
  const [index, setIndex] = useState(0);

  const images = [
    "/images/products/Formula1_600x600_USEN.jpg",
    "/images/products/Formula2_600x600_USEN.jpg",
    "/images/products/Formula3_600x600_USEN.jpg"
   ,
  ];

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }

    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("l")}
      >
        <Image
          src="/images/arrowl.png"
          layout="fill"
          objectFit="contain"
          // width={100}
          // height={100}
          alt="left-arrow"
          
        />
      </div>

      {/* when left or right arrow is clicked (which sets the index to a new value) this transform 
    style will move left or right 100vw each click to display a different picture */}
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((image, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image
              src={image}
              // priority='true'
              // width={550}
              // height={550}
              layout="fill"
              objectFit="contain"
              alt="featured-item"
              className="images"
            />
          </div>
        ))}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow("r")}
      >
        <Image
          src="/images/arrowr.png"
          // layout="fill"
          // objectFit="contain"
          width={100}
          height={100}
          alt="right-arrow"
        />
      </div>
    </div>
  );
};

export default Featured;
