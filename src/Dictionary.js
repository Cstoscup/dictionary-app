import axios from "axios";
import React, {useState} from "react";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css"

export default function Dictionary() {
    const [keyword, setKeyword] = useState("");
    const [results, setResults] = useState(null);
    const [photos, setPhotos] = useState(null);

    function handleChange(event) {
        event.preventDefault();
        setKeyword(event.target.value);
    }

    function handleClick(event) {
        event.preventDefault();

        let dictionaryUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
        axios.get(dictionaryUrl).then(handleDictionaryResponse);

        let photosApiKey = "563492ad6f91700001000001993b41314c274ec9a432dc664c35355f";
        let photosUrl =    `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        let header = {Authorization: `Bearer ${photosApiKey}`};
        axios.get(photosUrl, {headers: header}).then(handlePhotosResponse);
    }

    function handlePhotosResponse(response) {
        console.log(response.data)
        setPhotos(response.data.photos);
    }

    function handleDictionaryResponse(response) {
        setResults(response.data[0]);
    }
    
    return (
        <div className="Dictionary">
            <section>
                <h2>What word would you like to look up?</h2>
                <form className="text-center" onSubmit={handleClick}>
                    <input type="search" className="search-bar" onChange={handleChange} />
                </form>
                <div className="hint">e.g. sunset, wine, tree, animal</div>
            </section>
            <Results data={results} />
            <Photos data={photos} />
        </div>
    )
}