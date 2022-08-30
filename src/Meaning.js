import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
    return (
        <div className="Meaning">
            <section>
            <h3 className="text-capitalize">{props.meaning.partOfSpeech}</h3>
                {props.meaning.definitions.map(function(definition, index) {
                    return (
                        <div className="meaning-block" key={index}>
                            <strong>Definition: </strong>{definition.definition}
                            <Example example={definition.example} />
                            <Synonyms synonyms={definition.synonyms} />
                        </div>
                    )
                })}
            </section>
        </div>
    )
}

