import { createContext, useState } from "react"
const PHOTO_URL = "/photos.json";

export const PhotosContext = createContext();

const PhotosProvider = ({children}) => {
    const [photos, setPhotos] = useState([]);
    const [fav, setFav] = useState([]);
  return (
    <PhotosContext.Provider value={{photos, setPhotos,PHOTO_URL, fav, setFav}}>
        {children}
    </PhotosContext.Provider>
  );
};
export default PhotosProvider;