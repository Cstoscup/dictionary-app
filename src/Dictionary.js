import axios from "axios";
import React, {useState} from "react";
import Results from "./Results";
import "./Dictionary.css"

export default function Dictionary() {
    const [keyword, setKeyword] = useState("");
    const [results, setResults] = useState(null);

    function handleChange(event) {
        event.preventDefault();
        setKeyword(event.target.value);
    }

    function handleClick(event) {
        event.preventDefault();
        let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
        axios.get(url).then(handleResponse);
    }

    function handleResponse(response) {
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
        </div>
    )
}