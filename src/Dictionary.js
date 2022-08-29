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
    }
    
    return (
        <form className="text-center mt-5 mb-5">
            <input type="search" placeholder="Enter word..." className="me-3" onChange={handleChange} />
            <input type="submit" value="Search" onClick={handleClick} />
        </form>
    )
}