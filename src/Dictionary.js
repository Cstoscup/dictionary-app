import axios from "axios";
import React, {useState} from "react";
import Results from "./Results"

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
            <form className="text-center mt-5 mb-5">
                <input type="search" placeholder="Enter word..." className="me-3" onChange={handleChange} />
                <input type="submit" value="Search" onClick={handleClick} />
            </form>
            <Results data={results} />
        </div>
    )
}