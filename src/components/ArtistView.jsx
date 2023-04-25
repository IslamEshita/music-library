import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ArtistView() {
  const { id } = useParams();
  const [artistData, setArtistData] = useState([]);
  const navigate = useNavigate();

  const navButtons = function () {
    return (
      <div>
        <button onClick={() => navigate(-1)}>Back</button>
        <button onClick={() => navigate("/")}>Home</button>
      </div>
    );
  };

  useEffect(() => {
    const API_URL = `http://localhost:4000/album/${id}`;
    const fetchData = async () => {
      const response = await fetch(API_URL);
      const resData = await response.json();
      setArtistData(resData.results);
    };
    fetchData();
  });

  const justAlbums = artistData.filter(
    (entry) => entry.collectionType === "Album"
  );

  const renderAlbums = justAlbums.map((album, index) => {
    return (
      <div key={index}>
        <Link to={`/album/${album.collectionId}`}>
          <p>{album.collectionName}</p>
        </Link>
      </div>
    );
  });

  return (
    <div>
      {navButtons()}
      {renderAlbums}
    </div>
  );
}

export default ArtistView;
