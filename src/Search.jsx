import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"
import "./searchbar.css";

const Search = () => {
    const [input, setInput] = useState("");

    const fetchData = (value) => {
        fetch("https://jsonplaceholder.typicode.com/users").then((response) => response.json())
            .then((json) => {
                console.log(json)
                const results = json.filter((user) => {
                    return value && user && user.name && user.name.toLowerCase().includes(value)
                })
                console.log(results);
            })
    }

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }
    return (
        <>
            <div className="input-wrapper">
                <FaSearch id="search-icon" />
                <input type="text" placeholder="Type to search...." value={input} onChange={(e) => handleChange(e.target.value)} />
            </div>
        </>
    )
}

export default Search;