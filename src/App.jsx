import { useEffect, useState } from "react";

const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact"; //Buena práctica poner las apis en constantes.
//const CAT_ENDPOINT_IMAGE_URL = "https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true";
const CAT_PREFIX_IMAGE_URL = "https://cataas.com"; 

export function App() {
    const [fact, setFact] = useState();
    const [imageUrl, setImageUrl] = useState();

    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then(res => res.json())
            .then(data => {
                const { fact } = data;
                setFact(fact)

                const threeFirstWords = fact.split(" ", 3).join(" ") //split separa las palabras, join las une.
                console.log(threeFirstWords)

                fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
                    .then(res => res.json())
                    .then(response => {
                        const { url } = response
                        setImageUrl(url)
                    });
            });
    }, []); // Esta es la manera correcta de hacer un fetch en un componente funcional y nunca olvidar las dependencias.

    return (
        <main>
            <h1>App de gatitos</h1>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`First three words for ${fact}`} />}
        </main> //renderizado condicional. Si fact es true, se renderiza el párrafo.
    );
}