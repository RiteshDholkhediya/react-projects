/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { GrRotateRight } from "react-icons/gr";

function ImageSlider({ limit = 5, page = 1, url }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currIndex, setCurrIndex] = useState(0);
  const [error, setError] = useState(null);

  async function getImages(getUrl) {
    try {
      setLoading(true);
      let response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      let data = await response.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setError(e.message);
      setLoading(false);
      console.log(e);
    }
  }

  function handlePrev() {
    if (
      currIndex === 0
        ? setCurrIndex(images.length - 1)
        : setCurrIndex(currIndex - 1)
    );
  }

  function handleNext() {
    if (
      currIndex === images.length - 1
        ? setCurrIndex(0)
        : setCurrIndex(currIndex + 1)
    );
  }

  useState(() => {
    if (url !== "") getImages(url);
  }, [url]);

  if (loading) {
    return (
      <div className="flex gap-2 justify-center items-center text-2xl h-screen text-white">
        <div className=" bg-blue-950 p-4 rounded flex justify-center items-center">
          <GrRotateRight className="animate-spin" /> loading data...
        </div>
      </div>
    );
  }

  if (error !== null) {
    return <div className="">{`Error: ${error}`}</div>;
  }

  //   console.log(images);

  return (
    <>
      <div className="container  flex flex-col justify-center items-center h-screen w-screen bg-blue-800 ">
        <div className="shadow relative ">
          <IoIosArrowDropleftCircle
            onClick={handlePrev}
            className="text-3xl absolute top-[200px] cursor-pointer hover:text-[#efefef] shadow "
          />

          {images && images.length
            ? images.map((imgItem, index) => {
                return (
                  <img
                    key={imgItem.id}
                    src={imgItem.download_url}
                    alt={imgItem.author}
                    className={` ${
                      index !== currIndex ? "hidden" : ""
                    } w-[600px] h-[400px] rounded`}
                  />
                );
              })
            : null}
          <IoIosArrowDroprightCircle
            className="text-3xl absolute top-[200px] right-0 cursor-pointer hover:text-[#efefef] shadow"
            onClick={handleNext}
          />
        </div>

        <div className="flex gap-1 mt-3">
          {images && images.length
            ? [...Array(images.length)].map((_, index) => {
                return (
                  <button
                    key={index}
                    className={`${
                      currIndex == index ? "bg-gray-400" : "bg-gray-800"
                    } w-3 h-3 rounded-full `}
                    onClick={() => {
                      setCurrIndex(index);
                    }}
                  ></button>
                );
              })
            : null}
        </div>
      </div>
    </>
  );
}

export default ImageSlider;
