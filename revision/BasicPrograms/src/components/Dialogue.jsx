import { useState } from "react";

const Dialogue = () => {
  const [show, setshow] = useState(false);
  return (
    <div style={{ position: "relative" }}>
      <h1>Dialogue</h1>
      {show ? (
        <div className="dialogue">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
          aspernatur error minima. Nisi illo consectetur recusandae, odit, harum
          ea rem eum nobis debitis laudantium error quae necessitatibus
          distinctio. Sapiente, modi! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Perspiciatis molestias provident, ducimus quae,
          explicabo reiciendis, soluta debitis eum exercitationem delectus fuga
          officia blanditiis laudantium sequi facere? Laudantium eum recusandae
          voluptatem. Est, consequatur. Mollitia unde consequatur maiores, id
          ducimus quod delectus quisquam rerum, nihil tempore perferendis esse
          aspernatur totam ex vero vel dolores accusantium molestiae, eum sint.
          Corrupti eius fuga eaque.
          <button
            onClick={() => {
              setshow((show) => !show);
            }}
          >
            Hide
          </button>
        </div>
      ) : (
        <button
          className="dialogue-button"
          onClick={() => {
            setshow((show) => !show);
          }}
        >
          Show
        </button>
      )}
    </div>
  );
};

export default Dialogue;
