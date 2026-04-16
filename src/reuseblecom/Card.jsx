import "./card.css";

const Card = ({ data }) => {
  console.log("data", data);
  return (
    <div className="mainCardDiv">
      {data.map((value) => {
        return (
          <div className="card" key={value.id}>
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
