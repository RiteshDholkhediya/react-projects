/* eslint-disable react/prop-types */

import { AiFillStar } from "react-icons/ai";
import { useState } from "react";

function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrIndex) {
    setRating(getCurrIndex);
  }
  function handleMouseMove(getCurrIndex) {
    setHover(getCurrIndex);
  }
  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <>
      <div className=" h-[500px] flex justify-center items-center">
        <div className="bg-[#201658] px-[80px] py-[5rem] text-5xl rounded-xl flex gap-2 ">
          {[...Array(noOfStars)].map((_, index) => {
            index++;
            return (
              <AiFillStar
                key={index}
                onClick={() => {
                  handleClick(index);
                }}
                onMouseMove={() => {
                  handleMouseMove(index);
                }}
                onMouseLeave={() => {
                  handleMouseLeave(index);
                }}
                className={`${
                  index <= (hover || rating) ? "text-yellow-300" : "text-black"
                }`}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default StarRating;
