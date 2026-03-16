import { useState } from "react";

const StarRating = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(-1);
  const [hover, setHover] = useState(-1);

  const handleHover = (index) => {
    setHover(index);
  };
  const handleRating = (index) => {
    setRating(index);
  };

  return (
    <section className="flex gap justify-center">
      {[...Array(noOfStars)].map((_, index) => (
        <div
          key={index}
          style={{
            width: "50px",
            aspectRatio: "1",
            clipPath: "polygon(50% 0,79% 90%,2% 35%,98% 35%,21% 90%)",
            cursor: "pointer",
          }}
          onMouseEnter={() => handleHover(index)}
          onMouseLeave={() => handleHover(rating)}
          onClick={() => handleRating(index)}
          className={`${hover < index ? "bg-black" : "bg-green-500"}`}
        ></div>
      ))}
    </section>
  );
};

export default StarRating;
