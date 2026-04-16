import React from "react";
import { useParams } from "react-router-dom";

const Dynamic = () => {
  const { id } = useParams();

  switch (id) {
    case "1":
      break;
    case "2":
      break;

    case "3":
      break;
    case "4":
      break;

    case "5":
      break;
    case "6":
      break;

    case "7":
      break;
    case "8":
      break;
    default:
      return (
        <div>
          <h1>For ID {id}</h1> Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Quod molestiae cumque temporibus cum commodi
          assumenda libero provident. Fugit maxime, accusantium eaque
          reprehenderit temporibus itaque molestias error, animi distinctio,
          odio tempora!
        </div>
      );
  }
  console.log(id);
};

export default Dynamic;
