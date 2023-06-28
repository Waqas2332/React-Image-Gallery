import React from "react";
import CategoriesNav from "../components/CategoriesNav";
import { useParams } from "react-router-dom";
import { imageData } from "../data";
function SingleImage() {
  const id = useParams();
  const image = imageData.find((img) => img.typeImage === id.id);
  return (
    <>
      <CategoriesNav />
      <section className="container d-flex justify-content-center flex-column align-items-center h-75 mt-5">
        {image ? (
          <>
            <h2>You Searched For "{id.id}" </h2>
            <img
              src={image.imageSrc}
              alt={id.id}
              className="img-fluid mt-4 ms-4 rounded img-rounded"
              style={{ maxWidth: "100%", height: "400px" }}
            />
          </>
        ) : (
          <h2>Sorry, image not found</h2>
        )}
      </section>
    </>
  );
}

export default SingleImage;
