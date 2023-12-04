import { useContext } from "react";
import { PhotosContext } from "../context/PhotosContext";
import { Photo } from "../components/Photo";

const Favorites = () => {
  const { fav, setFav } = useContext(PhotosContext);
  return (
    <div>
      <div className="p-3 gallery grid-columns-4">
        {fav.map(({ id, src, alt}) => (
          <Photo key={id} id={id} src={src} alt={alt} />
        ))}
      </div>
    </div>
  );
};
export default Favorites;
