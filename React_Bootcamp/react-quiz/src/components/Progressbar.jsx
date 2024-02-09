import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

const Progressbar = ({ size, points, totalpoints, totalques }) => {
  const ele1 = useRef(null);
  const ele2 = useRef(null);
  function returnfill(currentsize, totalsize, totalpixels) {
    const percentage = (currentsize * 100) / totalsize;
    const currentpixels = (percentage * totalpixels) / 100;
    return currentpixels;
  }

  useEffect(() => {
    if (ele2.current.style.width === "500px") {
      ele1.current.style.width = `${parseInt(returnfill(size + 1, 15, 500))}px`;
    } else {
      ele1.current.style.width = `${parseInt(returnfill(size + 1, 15, 500))}px`;
    }
  }, [size]);

  return (
    <div className="w-fit m-auto p-4">
      <div
        ref={ele2}
        className={`border-2 bg-slate-200 rounded-full overflow-clip w-[300px] md:w-[500px] h-3 md:h-6`}
      >
        <div
          ref={ele1}
          className={`bg-gradient-to-r from-teal-400 to-cyan-400 h-full rounded-full`}
        ></div>
      </div>
      <div className="flex justify-between text-md md:text-lg my-2">
        <div>
          Question {size < totalques && size + 1}/{totalques}
        </div>
        <div>
          Points {points}/{totalpoints}
        </div>
      </div>
    </div>
  );
};

Progressbar.propTypes = {
  size: PropTypes.number,
  points: PropTypes.number,
  totalpoints: PropTypes.number,
  totalques: PropTypes.number,
};

export default Progressbar;
