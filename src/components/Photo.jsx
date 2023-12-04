import { useContext, useEffect, useState } from "react";
import IconHeart from "./IconHeart";
import { PhotosContext } from "../context/PhotosContext";

export const Photo = ({id, src, alt}) => {
    const [ filled, setFilled ] = useState(false);
    const { fav, setFav } = useContext(PhotosContext);


    useEffect(()=>{
      setFilled((prevFilled) => {if(fav.some((favImage) => favImage.id === id)) {
        return true;
      }else{
        return prevFilled;
      }})
    },[fav])


    const handleClick = () => {
      setFilled(!filled)
      if (!filled) {
        const isUnique = !fav.some((photo) => photo.id === id);
  
        if (isUnique) {
          setFav((prevFav) => [...prevFav, { id, src, alt }]);
        }
      } else {
        setFav((prevFav) => prevFav.filter((photo) => photo.id !== id));
      }
    }
  return (
    <div 
        className="photo" 
        style={{backgroundImage:`url(${src.portrait})`}}
        onClick={handleClick}
    >
        <IconHeart filled={filled} />
        <p>{alt}</p>
    </div>
  )
}
