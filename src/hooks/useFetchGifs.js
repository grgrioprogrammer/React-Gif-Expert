import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false)
    }

    useEffect(() => {
        getImages();
    }, [])
    //si dejo el array dependencias vacio, solo se va a ejecutar la primera vez que se crea y 
    // construye mi componente

    return {
        images,
        isLoading,
    }
}
