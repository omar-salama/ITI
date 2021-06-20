import { useEffect, useState } from "react";
export const ArtistInfo = ({ match }) => {
  const _id = match.params.id;
  const [artist, setArtist] = useState({});
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:3000/artists/${_id}`)
      .then((response) => response.json())
      .then((data) => {
        setArtist(data);
        setLoaded(true);
      });
  }, [_id]);

  if (!loaded) {
    return <h1>Loading</h1>;
  }
  return (
    <div className="container mt-5 text-center">
      <img
        src={`/covers/${artist.cover}.jpg`}
        className="img-fluid w-50"
        alt=""
      />
      <h1 className="mt-3">{artist.name}</h1>
      <p>{artist.bio}</p>
      <div className="row">
        {artist.albums.map((album) => (
          <div className="col-6 col-md-3 mx-auto">
            <img
              src={`/albums/${album.cover}.jpg`}
              className="img-fluid w-75 mt-3"
              alt=""
            />
            <p className="mt-2">{album.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
