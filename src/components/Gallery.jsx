import { useContext, useEffect } from "react";
import { PhotosContext } from "../context/PhotosContext";
import { Photo } from "./Photo";

const Gallery = () => {

  const { photos, setPhotos, PHOTO_URL } = useContext(PhotosContext);

  useEffect(() => {
    getPhotos();
  },[]);

  const getPhotos = async () =>{
    try {
      const response = await fetch(PHOTO_URL);
      const data = await response.json();
      setPhotos(data.photos);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="gallery grid-columns-4 p-3">
      {
        photos.map(({id, src, alt})=>(
          <Photo key={id} id={id} src={src} alt={alt} />
        ))
      }
    </div> 
  )
};
export default Gallery;
