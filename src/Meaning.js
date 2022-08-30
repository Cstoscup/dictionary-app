import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
    return (
        <div className="Meaning">
            <h4 className="text-capitalize">{props.meaning.partOfSpeech}</h4>
            {props.meaning.definitions.map(function(definition, index) {
                return (
                    <div key={index}>
                        <ul>
                            <li>{definition.definition}</li>
                            <Example example={definition.example} />
                            <Synonyms synonyms={definition.synonyms} />
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}

