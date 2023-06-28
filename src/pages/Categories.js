import React from "react";
import CategoriesNav from "../components/CategoriesNav";
import { useParams } from "react-router-dom";
import { imageData } from "../data";
import Item from "../components/Item";
const Categories = () => {
  const id = useParams();

  let data = [];
  if (id.id === "all") {
    data = imageData;
  } else {
    data = imageData.filter((img) => img.category === id.id);
  }

  return (
    <div>
      <CategoriesNav path={id.id} />
      <div className="container-fluid mt-5">
        <div className="row">
          {data.map((item) => (
            <Item image={item.imageSrc} key={item.imageSrc} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
