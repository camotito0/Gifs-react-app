import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoanding, setIsLoanding] = useState(true);

	useEffect(() => {
		getGifs(category)
		.then((data) => 
      setImages(data),
      setIsLoanding(false)
    );
	}, [])

  return {
    images,
    isLoanding
  }
}