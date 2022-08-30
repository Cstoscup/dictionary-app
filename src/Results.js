import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Results(props) {
    console.log(props.data)
    
    if (props.data) {
        return (
            <div className="Results ms-4 me-3">
                <h2 className="text-center text-capitalize">{props.data.word}</h2>
                {props.data.phonetics.map(function(phonetic, index){
                    return (
                        <div key={index}>
                            <Phonetic phonetic={phonetic} />
                        </div>
                    )
                })}
                {props.data.meanings.map(function(meaning, index) {
                    return (
                        <div key={index}>
                            <Meaning meaning={meaning} />
                        </div>
                    )
                })}
            </div>
        )
    } else {
        return null;
    }
    
}