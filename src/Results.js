import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Results(props) {
    if (props.data) {
        return (
            <div className="Results">
                <section>
                    <h3 className="word text-capitalize">{props.data.word}</h3>
                    {props.data.phonetics.map(function(phonetic, index){
                        return (
                            <div key={index}>
                                <Phonetic phonetic={phonetic} />
                            </div>
                        )
                    })}
                </section>
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