import React from "react";

const Item = (props) => {
  return (
    <div className="col-lg-4 col-xl-4 col-md-6 col-12 mb-4 ">
      <img
        src={props.image}
        alt="images"
        style={{ maxWidth: "100%", height: "400px" }}
      />
    </div>
  );
};

export default Item;
