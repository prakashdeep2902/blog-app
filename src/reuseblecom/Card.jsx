import "./card.css";
import { useNavigate } from "react-router-dom";

const Card = ({ data }) => {
  const navigate = useNavigate();
  const HandelCardClick = (id) => {
    navigate(`/dynamic/${id}`);
  };
  return (
    <div className="mainCardDiv">
      {data.map((value) => {
        return (
          <div
            className="card"
            key={value.id}
            onClick={() => HandelCardClick(value.id)}
          >
            <ul>
              <li>
                <span>{value.name ? "Name" : "Title"}:</span>{" "}
                {value.name || value.title}
              </li>
              <li>
                <span>{value.body ? "Body" : "No Data"}:</span>{" "}
                {value.body || ""}
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
