import { useNavigate } from "react-router-dom";

export default function Show({ showitem }) {
  const navigate = useNavigate();
console.log(showitem.summary);
  const handleClick = () => {
    navigate("/summary", { state: showitem });
  };
  return (
    <div className="card">
      <img
        className="card_img"
        src={showitem?.image?.original}
        alt="Not found"
      />
      <div className="card_details">
        <h2>{showitem?.name}</h2>
        <p className="card_title">
          <strong>Language:</strong> {showitem?.language}
        </p>
        <p>
          <strong>Rating:</strong> {showitem?.rating?.average}
        </p>
        <p>
          <strong>Genres:</strong> {showitem?.genres?.join(", ")}
        </p>
        <p>
          <strong>Premiered on:</strong> {showitem?.premiered}
        </p>
        <p>
          <a href={showitem?.url} target="_blank">
            <i>Official site</i>
          </a>
        </p>
        <button onClick={handleClick}>See summary</button>
      </div>
    </div>
  );
}
