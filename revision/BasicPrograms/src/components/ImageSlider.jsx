import { useRef, useState } from "react";

const ImageSlider = () => {
  const [sliderpos, setsliderpos] = useState(0);

  const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.png",
    "image6.png",
    "image8.png",
    "image9.png",
  ];
  return (
    <div>
      <h1>Image slider component with progressbar</h1>
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            onClick={() => {
              setsliderpos((current) =>
                current === 0 ? images.length - 1 : current - 1
              );
            }}
          >
            ⬅️
          </button>

          <div className="w-[200px] h-[300px] border-2 overflow-hidden ">
            <div
              className="h-[300px] flex duration-150 "
              style={{
                width: `${images.length * 200}px`,
                transform: `translateX(-${sliderpos * 200}px)`,
              }}
            >
              {images.map((e) => (
                <img className="w-[200px]" src={e} key={e} />
              ))}
            </div>
          </div>
          <button
            onClick={() => {
              setsliderpos((current) =>
                current === images.length - 1 ? 0 : current + 1
              );
            }}
          >
            ➡️
          </button>
        </div>
      </div>
      <Progressbar pos={sliderpos} len={images.length} />
    </div>
  );
};
const Progressbar = ({ pos, len }) => {
  return (
    <>
      <div>
        <div className="w-[200px] h-4 rounded-md bg-slate-300 m-auto overflow-hidden">
          <div
            className={`bg-emerald-400 flex justify-end h-4 rounded-sm  duration-75 ease-in-out`}
            style={{ width: `${(200 / len) * (pos + 1)}px` }}
          ></div>
        </div>
      </div>
    </>
  );
};
export default ImageSlider;
