import React from "react";

/**
 * Education background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/education.jpg";

const imageAltText = "graduation cap on books";

/**
 * List of education information.
 */
const educationList = [
  {
    degree: "Analise e Desenvolvimento de Sistemas",
    school: "Faculdade Descomplica",
    year: "2021 - 2023",
  },
  {
    degree: "Ensino Médio",
    school: "Colégio Estadual do Paraná",
    year: "2018 - 2020",
  },
];

const Education = () => {
  return (
    <section className="padding" id="education">
      <h2 style={{ textAlign: "center" }}>Education</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            // eslint-disable-next-line prettier/prettier
            style={{height: "90%", width: "100%", objectFit: "cover", animation: "1s ease-out 0s 1 slideInLeft"}}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {educationList.map((education) => (
            <div className="box" key={education.degree}>
              <h3>{education.degree}</h3>
              <p className="small">{education.school}</p>
              <p className="small">{education.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
