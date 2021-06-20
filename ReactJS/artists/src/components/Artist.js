import { Link } from "react-router-dom";
export const Artist = ({ artist }) => {
  return (
    <div className="Artist">
      <Link to={`/artist-details/${artist.id}`}>
        <img src={`covers/${artist.cover}.jpg`} alt="" className="w-75" />
      </Link>
      <p className="text-over-img">{artist.name}</p>
    </div>
  );
};
