import axios from "axios";
import React, {useState} from "react";

export default function Dictionary() {
    const [keyword, setKeyword] = useState("");

    function handleChange(event) {
        event.preventDefault();
        setKeyword(event.target.value);
    }

    function handleClick(event) {
        event.preventDefault();
        alert(`Searching for "${keyword}"...`);
        let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
        axios.get(url).then(handleResponse);
    }

    function handleResponse(response) {
        console.log(response)
    }
    
    return (
        <form className="text-center mt-5 mb-5">
            <input type="search" placeholder="Enter word..." className="me-3" onChange={handleChange} />
            <input type="submit" value="Search" onClick={handleClick} />
        </form>
    )
}